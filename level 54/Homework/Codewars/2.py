def get_size(w,h,d):
    
    volume = w * h * d
    
    
    surface_area = 2 * (w * h + h * d + d * w)
    
    
    return [surface_area, volume]