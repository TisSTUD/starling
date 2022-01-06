import './form.css';
import Left from './pages/Left';
import SignInOutContainer from './pages/Right'




function Appform() {
  return (
    <div className="App">
     <div className="Main">

       <div className="Left_Sidebar_Area">
         <Left/>
       </div>

       <div className="Right_Sidebar_Area">
          <SignInOutContainer/>
       </div>
     </div>
    </div>
  );
}

export default Appform;