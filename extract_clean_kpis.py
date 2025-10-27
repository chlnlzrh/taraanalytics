import json
import re

# Read the file content
with open('C:/ai/petpooja/restaurant_kpi_metrics_127.txt', 'r', encoding='utf-8') as f:
    content = f.read()

print("File size:", len(content), "characters")

# Find the JSON array boundaries
array_start = content.find('[')
if array_start == -1:
    print("No JSON array found")
    exit(1)

print("Array starts at position:", array_start)

# Try to find where the valid JSON ends by looking for patterns
# The issue seems to be around line 478, let's find that problematic area
lines = content.split('\n')
print(f"Total lines: {len(lines)}")

# Look for the problem around line 478
problem_line = 478
if problem_line < len(lines):
    print(f"Line {problem_line}: {lines[problem_line-1]}")
    print(f"Line {problem_line+1}: {lines[problem_line]}")
    print(f"Line {problem_line+2}: {lines[problem_line+1]}")

# Let's try to extract just the valid part by finding the last properly closed object
# before the corruption
valid_content = ""
brace_count = 0
in_array = False
valid_objects = []

# Parse character by character to find valid JSON objects
i = 0
while i < len(content):
    char = content[i]
    
    if char == '[' and not in_array:
        in_array = True
        valid_content += char
    elif in_array:
        valid_content += char
        
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            
            # If we've closed all braces in this object
            if brace_count == 0:
                # Look ahead to see if there's a comma and another object
                next_pos = i + 1
                while next_pos < len(content) and content[next_pos] in ' \n\r\t':
                    next_pos += 1
                
                if next_pos < len(content):
                    if content[next_pos] == ',':
                        # Continue parsing
                        pass
                    elif content[next_pos] == ']':
                        # End of array
                        valid_content += ']'
                        break
                    else:
                        # Something's wrong, try to salvage what we have
                        print(f"Unexpected character at position {next_pos}: '{content[next_pos]}'")
                        # Add closing bracket and break
                        if not valid_content.endswith(']'):
                            valid_content += ']'
                        break
    i += 1

print(f"Extracted valid content length: {len(valid_content)}")

# Try to parse the cleaned JSON
try:
    data = json.loads(valid_content)
    print(f"Successfully parsed {len(data)} KPIs")
except json.JSONDecodeError as e:
    print(f"JSON parse error: {e}")
    # Try to manually fix common issues
    # Remove any trailing commas before closing brackets
    fixed_content = re.sub(r',\s*]', ']', valid_content)
    fixed_content = re.sub(r',\s*}', '}', fixed_content)
    
    try:
        data = json.loads(fixed_content)
        print(f"Successfully parsed after fixes: {len(data)} KPIs")
    except json.JSONDecodeError as e2:
        print(f"Still couldn't parse: {e2}")
        # Last resort: try to extract individual objects manually
        objects = re.findall(r'\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}', content)
        valid_objects = []
        for obj_str in objects:
            try:
                obj = json.loads(obj_str)
                if 'id' in obj and 'metric' in obj:
                    valid_objects.append(obj)
            except:
                continue
        data = valid_objects
        print(f"Manually extracted {len(data)} objects")

# Filter out FIN_008 and create the final list
kpis = [item for item in data if item.get('id') != 'FIN_008']

print(f"\nFiltered KPIs (excluding FIN_008): {len(kpis)}")

# Group by categories
categories = {}
for kpi in kpis:
    cat = kpi.get('category_name', 'Unknown')
    if cat not in categories:
        categories[cat] = {}
    
    subcat = kpi.get('sub_category_name', 'Unknown')
    if subcat not in categories[cat]:
        categories[cat][subcat] = []
    
    categories[cat][subcat].append(kpi)

print("\n=== KPI Categories Overview ===")
total_count = 0
for cat, subcats in categories.items():
    cat_count = sum(len(kpi_list) for kpi_list in subcats.values())
    print(f"\n{cat}: {cat_count} KPIs")
    total_count += cat_count
    
    for subcat, kpi_list in subcats.items():
        print(f"  └─ {subcat}: {len(kpi_list)} KPIs")
        # Show first 2 examples
        for i, kpi in enumerate(kpi_list[:2]):
            print(f"     • {kpi.get('id', 'NO_ID')}: {kpi.get('metric', 'NO_METRIC')}")
        if len(kpi_list) > 2:
            print(f"     ... and {len(kpi_list) - 2} more")

print(f"\nTotal KPIs to create: {total_count}")

# Save the cleaned data
with open('C:/ai/petpooja/cleaned_kpis.json', 'w', encoding='utf-8') as f:
    json.dump(kpis, f, indent=2, ensure_ascii=False)

print(f"\nSaved {len(kpis)} cleaned KPIs to 'cleaned_kpis.json'")