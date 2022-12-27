import ResumeRight from "./ResumeRight";
import ResumeLeft from "./ResumeLeft";

const Resume = () => {
    
    return(
        <div className="row" >
            <h1 className="pt-4">KHUSANOV JAVOKHIR</h1>
            <div className="col-md-6 mt-4">
                <ResumeLeft/>
            </div>
            <div className="col-md-6 mt-4">
                <ResumeRight/>
            </div>
        </div>
    )
}

export default Resume;