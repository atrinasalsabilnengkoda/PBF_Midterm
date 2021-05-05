import React from 'react';
import Photo from '../resource/poto.JPG';

const About = () => {
      return(
        <div>
            <br /><br/><br/><br/>
            <div class="card border-primary mb-2" max-width="150" align="center">
                <div class="row no-gutters">
                    <div class="col-md-1"/>
                    <div class="col-md-2">
                        <br/><br/><br/>
                        <img src={Photo} class="card-img" alt=""/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h1 class="card-title"><b className="text-primary">About</b></h1>
                            <hr />
                            <h4 class="card-text">Name : Atrina Salsabil Nengkoda</h4><br/>
                            <h4 class="card-text">NIM : 1841720216</h4><br/>
                            <h4 class="card-text">Class : TI-3G</h4><br/>
                            <h4 class="card-text">Email : atrina.nengkoda@gmail.com</h4><br/>
                            <h4 class="card-text">Github : atrinasalsabilnengkoda</h4><br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
  }

export default About;