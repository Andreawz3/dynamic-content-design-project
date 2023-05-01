// import styles from './NutritionButton.module.css';
// import Image from 'next/image';
// import useNutritionDetails from '@/hooks/nutritionDetails';

// export default function NutritionButton(){
//     const {showNutrition, setShowNutrition} = useNutritionDetails();

//     // openDetails
// }{

//     return(
//         <>
//          <div className={styles.nutrition__details_button} onClick={() => {
//             setShowNutrition(!showNutrition);
//          }}>
//               <div className={styles.nutrition__details_button_text}>
//                 <button onClick={openDetails}>
//                   <p>NUTRITION DETAILS</p>
//                 </button>
//               </div>
//               <button onClick={openDetails}>
//                 <Image
//                   src={"/icons/recipe/apple.svg"}
//                   alt={"apple-icon"}
//                   width={20}
//                   height={20}
//                 />
//               </button>
//             </div>
//         </>
//     )

// }

import styles from './NutritionButton.module.css'
import Image from 'next/image'
import useNutritionDetails from '@/hooks/nutritionDetails'

export default function NutritionButton() {

    const {showNutrition, setShowNutrition} = useNutritionDetails();

    return (
        <>
        <div onClick={()=>{
            setShowNutrition(!showNutrition);
        }}>
            <div>
                <button> 
                    NUTRITION DETAILS
                    <Image
                    className={styles.apple__icon}
                    src={"/icons/recipe/apple.svg"}
                    alt={"apple-icon"}
                    height={20}
                    width={20}
                    />
                </button>
            </div>
        </div>
        </>
    )
}