import json

# Read the entire file
with open('C:/ai/petpooja/restaurant_kpi_metrics_127.txt', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Extract KPIs except FIN_008
kpis = []
for item in data:
    if item.get('id') != 'FIN_008':  # Exclude Prime Cost KPI
        kpis.append({
            'id': item.get('id'),
            'metric': item.get('metric'),
            'category_name': item.get('category_name'),
            'sub_category_name': item.get('sub_category_name'),
            'formula': item.get('formula'),
            'definition': item.get('definition'),
            'why_it_matters': item.get('why_it_matters'),
            'target': item.get('target'),
            'warning_range': item.get('warning_range'),
            'critical': item.get('critical'),
            'data_source': item.get('data_source'),
            'refresh': item.get('refresh'),
            'drill_down': item.get('drill_down'),
            'user': item.get('user'),
            'alert_threshold': item.get('alert_threshold'),
            'visualization': item.get('visualization'),
            'india_specific': item.get('india_specific')
        })

print(f"Total KPIs to create: {len(kpis)}")
print("\n=== KPI Categories ===")

# Group by categories
categories = {}
for kpi in kpis:
    cat = kpi['category_name']
    if cat not in categories:
        categories[cat] = {}
    
    subcat = kpi['sub_category_name']
    if subcat not in categories[cat]:
        categories[cat][subcat] = []
    
    categories[cat][subcat].append(kpi)

# Print summary
for cat, subcats in categories.items():
    print(f"\n{cat}:")
    for subcat, kpi_list in subcats.items():
        print(f"  {subcat}: {len(kpi_list)} KPIs")
        for kpi in kpi_list[:3]:  # Show first 3 KPIs as examples
            print(f"    - {kpi['id']}: {kpi['metric']}")
        if len(kpi_list) > 3:
            print(f"    ... and {len(kpi_list) - 3} more")

print(f"\nTotal: {sum(len(kpi_list) for subcats in categories.values() for kpi_list in subcats.values())} KPIs")