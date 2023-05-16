import { useState } from "react";

export default function useCheckList() {
    const [checked, setChecked] = useState([]);

    return {checked, setChecked};
}