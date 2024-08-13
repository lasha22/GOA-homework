def number(bus_stops):
    
    total_people = 0
    
    
    for on, off in bus_stops:
        total_people += on   
        total_people -= off  
    
    return total_people
