function duplicateCount(text) {
    const lowerText = text.toLowerCase();
    const charCount = new Map();

    for (const char of lowerText) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    let duplicates = 0;
    for (const count of charCount.values()) {
        if (count > 1) {
            duplicates++;
        }
    }

    return duplicates;
}


