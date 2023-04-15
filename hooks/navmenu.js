import { useState } from "react";

export default function useNavMenu() {
    const [showMenu, setShowMenu] = useState(false);

    return {showMenu, setShowMenu};
}