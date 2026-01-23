
export const useNavItems = () => {
    return [
        { label: "Home", path: "/", type: "route" },
        { label: "Categories", anchor: "categories", type: "anchor" },
        { label: "Collaborators", path: "/collaborators", type: "route" },
        { label: "About", path: "/about", type: "route" },
    ] as const
}

// using as const so typescript will read the literal value