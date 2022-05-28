import { Fragment } from 'react';
import generalClasses from '../Artboard.module.css';
import classes from "./classes.module.css";

const Artboard1 = props => {
    return (
       
        <div 
            id="section-to-print"
            onClick={props.onClickArtboard} 
            className={[generalClasses.container, classes.container].join(' ')} 
            style={{transform: `scale(${props.zoom / 100})`, ...props.style}}>
            
            <div style={{display: 'flex'}} className={classes.parent}>
                <div style={{width: '35rem', marginLeft: '2rem', marginTop: '4rem'}} className={classes.child1}>
                <div className={classes.personal} >
              
                <header>   
                    <div>
                        <p className={classes.name}>{props.personal?.name}</p> <hr></hr><br></br>
                        <p ><h1>Professional Summary</h1></p> <hr></hr>
                        <p className={classes.desc}>{props.personal?.desc}</p>
                    </div>
                </header>

                  <div className={classes.projects} >
                        <h1>Projects</h1> <hr></hr>
                        { 
                            props.projects?.map(project => (
                                <Fragment key={project.title}>
                                    <b><p><a href={project.url !== "" ? `https://${project?.url}` : ''}>{project?.title}</a></p></b>
                                    <p style={{fontSize: '1.2rem'}}>{project?.description}</p>
                                </Fragment>
                            ))
                        }
                    </div>
                
                </div>
                </div>
                
                <div style={{  backgroundColor:'#333399'}}  className={classes.child2}><br></br><br></br><br></br>
                    <ul className={classes.ul} style={{marginLeft:'2rem', marginRight:'5rem'}}>
                        <li><a href='https://maps.google.com'>  <i className="fas fa-map-marker">  </i> {props.personal?.loca}</a></li>
                        <li><a href={`mailto:${props.personal?.email}`}><i className="fas fa-envelope"></i> {props.personal?.email}</a></li>
                        <li><a href={`tel:${props.personal?.phone}`}><i className="fas fa-phone-alt"></i> {props.personal?.phone}</a></li>
                    </ul>
                    
                    <div className={classes.skills}  style={{marginLeft:'2rem', marginRight:'5rem'}}>
                        <h1>Skills</h1> <hr></hr>
                        <ul>
                            { props.skills?.map(skill => <li key={skill}>{skill}</li>)}
                        </ul>    
                    </div>

                    <div className={classes.education}  style={{marginLeft:'2rem', marginRight:'5rem'}} >
                        <h1>Education</h1><hr></hr>
                        <p><b>{props.education?.degree}</b></p>
                        <p>{props.education?.university}</p>
                        {props.education?.startDate} to {props.education?.endDate}
                    </div>
                    
                    <div className={classes.personal}  style={{marginLeft:'2rem', marginRight:'5rem'}} >
                        <h1>Affiliation</h1><hr></hr>
                        <p>{props.personal?.affiliation}</p>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Artboard1;