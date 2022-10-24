import Page from '../Core/Header/Page';
import classes from './Recommendation.module.scss';
import { useDispatch,useSelector } from 'react-redux';
import { formAction } from '../../store/slices/form';
const Recommendation=()=>{
const dispatch=useDispatch();
 const recommendationTableData=useSelector(state=>state.form.recommendation)
const setForm=(name,value)=>{
      dispatch(formAction.setRecommendation({name:name,value:value}))
   }
      //  const rows=recommendationTableData?.map(row=>{
      //    return(<tr >
      //       <td>{row.name}</td>
      //       <td>{row.recommendation}</td>
      //       <td>{row.adminResponse} </td>
      //    </tr>)
      // })

 
  const Submit=(event)=>{
   event.preventDefault();
  console.log(recommendationTableData)
  }
    return(
        <Page title='Recommendation'>
    <div className={classes.recommendation}>
        <form  className={classes.recommendationForm} onSubmit={Submit}>
          <div>
            <label>Name:</label>
            <input type="text" placeholder=" name " required onChange={(e)=>setForm('name',e.target.value)}/>
          </div>
          <div>
            <label>Recommendation:</label>
            <textarea className={classes.textArea} placeholder="Enter your note here..." onChange={(e)=>setForm('recommendation',e.target.value)}></textarea>
             <button type='submit'>submit</button>
          </div> 
        </form>
         <div className={classes.tableUsers}>
            <h1 className={classes.header}>All Recommendations:</h1>
            <table cellSpacing="0">
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Recommendation</th>
                  <th width="230">Admin’s Response</th>
               </tr>
               </thead>
               <tbody>
               {/* {rows} */}
               </tbody>
            
            </table>
         </div>
    </div>
    </Page>
    )
}

export default Recommendation;