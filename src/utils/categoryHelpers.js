export const genderMap = { k: "kadin", e: "erkek" };

export const getCategoryPath = (category) => {
    const gender = genderMap[category.gender] || category.gender;
    const categoryName = category.title
        .toLowerCase()
        .replace(/ş/g, "s")
        .replace(/ı/g, "i")
        .replace(/ğ/g, "g")
        .replace(/ü/g, "u")
        .replace(/ö/g, "o")
        .replace(/ç/g, "c")
        .replace(/\s+/g, "-");
    return `/shop/${gender}/${categoryName}/${category.id}`;
};