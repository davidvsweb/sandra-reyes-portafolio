import react from "./../../../assets/img/react.svg";
import angular from "./../../../assets/img/angular.svg";
import django from "./../../../assets/img/django.svg";
import strapi from "./../../../assets/img/strapi.svg";
import bootstrap from "./../../../assets/img/bootstrap.svg";
import wordpress from "./../../../assets/img/wordpress.svg";
import typescript from "./../../../assets/img/typescript.svg";
import python from "./../../../assets/img/python.svg";
import javascript from "./../../../assets/img/javascript.svg";
import github from "./../../../assets/img/github.svg";
import node from "./../../../assets/img/node-js.svg";
import analytics from "./../../../assets/img/google-analytics.svg";

export function Languages() {
  return (
    <section className="px-4 py-8 md:p-8">
      <div className="flex flex-col gap-8">
        <div>
          <h3 className="text-center font-bold text-2xl mb-2" id="my_projects">
            Tecnologías
          </h3>
          <p className="text-center text-md">
            Estas son las tecnologías con las que he trabajado durante mi
            carrera.
          </p>
        </div>
        <div className="flex justify-around">
          <img className="hard-skills-icon" src={react} alt="react-icon" />

          <img className="hard-skills-icon" src={angular} alt="angular-icon" />

          <img className="hard-skills-icon" src={django} alt="django-icon" />

          <img
            className="hard-skills-icon"
            src={bootstrap}
            alt="bootstrap-icon"
          />

          <img
            className="hard-skills-icon"
            src={wordpress}
            alt="wordpress-icon"
          />

          <img
            className="hard-skills-icon"
            src={typescript}
            alt="typescript-icon"
          />
        </div>
        <div className="flex justify-around">
          <img className="hard-skills-icon" src={python} alt="python-icon" />
          <img className="hard-skills-icon" src={strapi} alt="strapi-icon" />

          <img
            className="hard-skills-icon"
            src={javascript}
            alt="javascript-icon"
          />

          <img className="hard-skills-icon" src={github} alt="github-icon" />

          <img
            className="hard-skills-icon"
            src={analytics}
            alt="wordpress-icon"
          />

          <img className="hard-skills-icon" src={node} alt="node-js-icon" />
        </div>
      </div>
    </section>
  );
}
