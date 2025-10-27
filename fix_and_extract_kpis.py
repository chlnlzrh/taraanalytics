import json
import re

# Read the file and try to parse it
with open('C:/ai/petpooja/restaurant_kpi_metrics_127.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Find where the JSON array starts
start_idx = content.find('[')
if start_idx == -1:
    print("No JSON array found")
    exit()

# Find the end of the valid JSON array - look for the last complete '}' before extra content
# Split the content and check for valid JSON structure
try:
    # Try to parse as is first
    data = json.loads(content)
    print("JSON is valid as-is")
except json.JSONDecodeError as e:
    print(f"JSON error: {e}")
    # Try to fix it by finding the last complete object
    # Find all complete objects ending with }
    objects = []
    current_obj = ""
    brace_count = 0
    in_string = False
    escape_next = False
    
    for i, char in enumerate(content):
        if escape_next:
            escape_next = False
            current_obj += char
            continue
            
        if char == '\\':
            escape_next = True
            current_obj += char
            continue
            
        if char == '"' and not escape_next:
            in_string = not in_string
        
        current_obj += char
        
        if not in_string:
            if char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0 and current_obj.strip().startswith('{'):
                    # Complete object found
                    try:
                        obj = json.loads(current_obj.strip())
                        objects.append(obj)
                        current_obj = ""
                    except:
                        current_obj = ""
    
    print(f"Extracted {len(objects)} valid JSON objects")
    data = objects

# Now extract KPIs except FIN_008
kpis = []
for item in data:
    if item.get('id') != 'FIN_008':  # Exclude Prime Cost KPI
        kpis.append(item)

print(f"\nTotal KPIs to create: {len(kpis)}")

# Group by categories for overview
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
for cat, subcats in categories.items():
    print(f"\n{cat}:")
    for subcat, kpi_list in subcats.items():
        print(f"  {subcat}: {len(kpi_list)} KPIs")

# Save cleaned data for processing
with open('C:/ai/petpooja/cleaned_kpis.json', 'w', encoding='utf-8') as f:
    json.dump(kpis, f, indent=2, ensure_ascii=False)

print(f"\nSaved {len(kpis)} KPIs to cleaned_kpis.json")