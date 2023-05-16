import { useState } from "react";

export default function useCheckList() {
    const [checked, setChecked] = useState([]);

    const handleCheckedItems = (item) => {
        if (checked.includes(item)) {
            setChecked(checked.filter(checkedItem => checkedItem !== item));
          } else {
            setChecked([...checked, item]);
          }
    }

    return {checked, setChecked, handleCheckedItems};
}