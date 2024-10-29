import react from "./../../../assets/img/react.svg"
import angular from "./../../../assets/img/angular.svg"
import django from "./../../../assets/img/django.svg"
import bootstrap from "./../../../assets/img/bootstrap.svg"
import wordpress from "./../../../assets/img/wordpress.svg"
import typescript from "./../../../assets/img/typescript.svg"
import python from "./../../../assets/img/python.svg"
import javascript from "./../../../assets/img/javascript.svg"
import github from "./../../../assets/img/github.svg"
import node from "./../../../assets/img/node-js.svg"
import analytics from "./../../../assets/img/google-analytics.svg"

export function Languages() {
    return (
        <section className="my-5 py-5">
            <div className="container">
                <h3 className="text-center" id="my_projects"><strong>Tecnologías</strong></h3>
                <p className="text-center description m-0">Las siguientes tecnologías las he utilizado a lo largo de mi carrera</p>
                <div className="row mt-5">
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={react} alt="react-icon" />
                    </div>
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={angular} alt="angular-icon" />
                    </div>
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={django} alt="django-icon" />
                    </div>
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={bootstrap} alt="bootstrap-icon" />
                    </div>
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={wordpress} alt="wordpress-icon" />
                    </div>
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={typescript} alt="typescript-icon" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={python} alt="python-icon" />
                    </div>
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={javascript} alt="javascript-icon" />
                    </div>
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        
                    </div>
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={github} alt="github-icon" />
                    </div>
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={analytics} alt="wordpress-icon" />
                    </div>
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={node} alt="node-js-icon" />
                    </div>
                </div>
            </div>
        </section>
    )
}