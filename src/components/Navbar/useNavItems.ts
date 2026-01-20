
export const useNavItems = () => {
    return [
        { label: "Home", path: "/", type: "route" },
        { label: "Categories", anchor: "categories", type: "anchor" },
        { label: "About", path: "/about", type: "route" },
    ] as const
}

// using as const so typescript will read the literal value