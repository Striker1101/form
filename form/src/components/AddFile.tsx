
import React, { ReactElement } from "react"

type AddFileProps = {title:string}
// const  AddFile: React.FC<{}> =({title}: AddFileProps) =>{
//     return(
//         <div>
//             <h1>this is an added file</h1>
//         </div>
//     )
// }

const  AddFile =({title}: AddFileProps):ReactElement =>{
    return(
        <div>
            <h1>this is an added file</h1>
        </div>
    )
}

export default AddFile