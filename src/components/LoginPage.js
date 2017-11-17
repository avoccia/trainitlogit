import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin}) => (
  <div className="wrapper wrapper-loginpage">
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Train It Log It</h1>
        <p>Challenge yourself, challenge your friends</p>
        <button className="button" onClick={startLogin}>Login with Google</button>
      </div>
    </div>
    <div className="content-container">
      <div className="container">   
      <div className="row">
        <div className="col-md-10 col-md-offset-1">                    
          <div className="section-title">                       
            <h2> About | Train It Log It </h2>
            <p> Train It Log It is a web application that allows you to log your workouts and track your progress, all while competing against your friends.</p>     
          </div>                    
        </div>           
      </div>               
    </div>       
    <div className="choose-us-wrapper">          
      <div className="container">               
        <div className="row">              
          <div className="row__medium-6">                    
            <div className="about-trainit">                      
              <img className="img-responsive" src="/images/about-trainit.png" alt="graphic"/>              
            </div>                 
          </div>               
          <div className="row__medium-6">                    
            <div className="choose-us-title">       
              <h2> Why Choose Us? </h2>
              <p> You should choose us because we make it easier to track your training progress, while competing with your friends.</p>                         
            </div>                      
            <div className="choose-us-description">                          
              <div className="choose-us-item">                                               
                <h3> Track Your Progress </h3>
                <p>Train It Log It makes it easy to track your progress over time.</p>                                        
              </div>
              <div className="choose-us-item">                                                              
                <h3> Compete Against Your Friends </h3>
                <p>Challenge your friends to see who can rack up the most time.</p>                               
              </div>
              <div className="choose-us-item">                                                                 
                <h3> It's Free </h3>
                <p>Train It Log It is a completely free service, making it easy to get closer to your fitness goals.</p>                              
              </div>
            </div>
          </div>     
        </div>               
      </div>     
    </div>
  </div>
</div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);