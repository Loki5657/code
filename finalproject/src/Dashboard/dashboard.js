import '../App.css';
// import logo from './images/exp_logo.png';
import logo from '../images/exp_logo.png';
import profile from '../images/profile.svg';
import drop from '../images/arrow_drop_down_black_24dp.svg';
import star from '../images/star_black_24dp.svg'
import star_black from '../images/star_border_black_24dp.svg'
import edit from '../images/edit_white_24dp.svg'
import eye from '../images/eye.svg'
import doc from '../images/doc_icon_ff.svg'
import close from '../images/close_black_24dp.svg'
import add from '../images/add_black_24dp.svg'
import mail from '../images/email_black_24dp.svg'
import phn from '../images/call_black_24dp.svg'
import up_doc from '../images/doc_icon_green.svg'
import cal from '../images/event_black_24dp.svg'
// import {  Link } from "react-router-dom";
import '../index.css'


function Dashboard() {
  return (
    <div className="App">
      <div className="row main_clss ">


        <img className="col logo_img" src={logo} alt=" logo_img" />
        
        {/* <li>
            <Link  className="col title_component" to="/Dashboard">Dashboard</Link>
          </li> */}
        <input type="button" className="col title_component" value="Dashboard" />
        <div className="col title_component2">Customer</div>

        <div className="col title_component2">Technician</div>

        <div className=" col"><img className=" profile_img" src={profile} alt="profile_img" /></div>
        <div className=" col"> <img className=" profile" src={drop} alt="drop_img" /></div>

      </div>
      <div className="col-sm=12  ">
        <div className="main">
          <div className="first_div">

            <div className="container mt-2">
              <div><a className="link_Technician" href="www.Technician.com">&lt;TECHNICIAN</a></div>
            </div>
            <div className="container mt-3 main_clss">
              <img className=" col profile_component" src={profile} alt="profile_img" />
              <h2 className="name_tag">John Smith</h2>
              <div>
                <img className="img_clss3" src={star} alt="star_icon" />
                <img src={star} alt="star_icon" />
                <img src={star} alt="star_icon" />
                <img src={star} alt="star_icon" />
                <img src={star_black} alt="star_icon" />

                <span className="avg_42" >4.2 Average</span>
              </div>
              <hr className="hr_tag" />
              <label className="tech_info" htmlFor="assign">TECHNICAL INFORMATION</label><br />
              <div className="row">
                <div className="col-5 side_1">Email</div>
                <div className="col-5  side_11">jsmith@gmail.com</div>
              </div>
              <div className="row">
                <div className="col-5 side_2">Phone Number</div>
                <div className="col-5 side_22">999-999-999</div>
              </div>
              <div className="row">
                <div className="col-5 side_3">member since</div>
                <div className="col-5 side_33">02-02-2020</div>
              </div>


              <div className="container mt-3  mig_div">


                <button type="button" className="btn btn-success btn_clss" data-bs-toggle="modal"
                  data-bs-target="#myModal">
                  EDIT INFORMATION
                </button>

                <img className="img_div" src={edit} alt="edit_image" />
              </div>
            </div>
            <div className="modal modal_clss" id="myModal">
              <div className="modal-dialog modal-md clss_compo">
                <div className="modal-content">
                  <div className="modal-header hr_btum">
                    <h5 className="modal-title modal_title">Edit Techinical Information</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                  </div>
                  <div className=" col modal-body bd_clss data-bs-backdrop=static">
                    <img className=" bd_profile" src={profile} alt="profile_img" />
                    <a href="ww.wupload.com" className="up_compo" >Upload new image</a>
                    <div className="border_compo">
                      <img className="name_clss" src={profile} alt="profile" />
                      <p className="name1"> John Smith</p>
                    </div>
                    <div className="border_compo">
                      <img className="name_clss" src={mail} alt="mail_img" />
                      <p className="name"> JohnSmith@gmail.com</p>
                    </div>
                    <div className="border_compo">

                      <img className="name_clss" src={phn} alt="phn_img" />
                      <p className="name1"> 999-999-9999</p>

                    </div>
                    <div className="name_clss3">
                      <p className="name_clss2"><img src={doc} alt="doc_img" /></p>
                      <p className="doc_component">Jsmith.pdf</p>

                      <p className="eye_component2"><img src={close} alt="close_img" /></p>
                    </div>
                    <div className="posrel">
                      <button type="button" className="btn btn-success btn_clss1 ">
                        UPLOAD DOCUMENTS
                      </button>
                      <img className="img_upload" src={up_doc} alt="up_doc" />
                    </div>
                    <div className="posrel">

                      <input type="button" className="btn btn-success btn_clss2" value="Save Changes" />

                    </div>

                  </div>                </div>

              </div>

            </div>


            <hr className="hr_tag" />

            <div className="div_clss_compo"  >
              <label className="tech_info" htmlFor="assign">TECHNICAL DOCUMENTS</label><br />
              <div className="mail-0" >
                <p className="doc_component1"><img src={doc} alt="doc_img" />
                </p>
                <p className="doc_component">Jsmith.pdf</p>
                <p className="eye_component1"><img src={eye} alt="eye_img" />
                </p>
                <p className="eye_component"><img src={close} alt="close_img" /></p>
              </div>
              <div className="mail-0">
                <p className="doc_component1"><img src={doc} alt="doc_img" />
                </p>
                <p className="doc_component">Jsmith.pdf</p>
                <p className="eye_component1"><img src={eye} alt="eye_img" />
                </p>
                <p className="eye_component"><img src={close} alt="close_img" /></p>
              </div>
              <div className="upload_add">
                <button type="button" className="btn btn-success btn_clss4">
                  UPLOAD A FILE
                </button>
                <img className="upload_div" src={add} alt="No imge found" />
              </div>
            </div>
          </div>
          <div className="middle">

          </div>
          <div className="col-sm=12 inner_div">
            <div className="hr_component">
              <input className=" col schedule_btn" type="button" value="Scheduled" />
              <input className=" col  service_btn" type="button" value="Completed Services" />
            </div>

            <table className="table tb_padding ">
              <thead className="table-light">
                <tr>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src={cal} alt="calander" /></td>
                  <td>1531 NE 39th Street</td>
                  <td>March 20th 2020</td>
                  <td>2pm</td>
                  <td><img src={doc} alt="doc_img" /></td>
                </tr>
                <tr>
                  <td><img src={cal} alt="doc_img" /></td>
                  <td>1531 NE 39th Street</td>
                  <td>March 20th 2020</td>
                  <td>2pm</td>
                  <td><img src={doc} alt="doc_img" /></td>
                </tr>
                <tr>
                  <td><img src={cal} alt="doc_img" /></td>
                  <td> 1531 NE 39th Street</td>
                  <td>March 20th 2020</td>
                  <td>2pm</td>
                  <td><img src={doc} alt="doc_img" /></td>
                </tr>
                <tr>
                  <td><img src={cal} alt="doc_img" /></td>
                  <td>1531 NE 39th Street</td>
                  <td>March 20th 2020</td>
                  <td>2pm</td>
                  <td><img src={doc} alt="doc_img" /></td>
                </tr>
                <tr>
                  <td><img src={cal} alt="doc_img" /></td>
                  <td>1531 NE 39th Street</td>
                  <td>March 20th 2020</td>
                  <td>2pm</td>
                  <td><img src={doc} alt="doc_img" /></td>
                </tr>
                <tr>
                  <td><img src={cal} alt="doc_img" /></td>
                  <td> 1531 NE 39th Street</td>
                  <td>March 20th 2020</td>
                  <td>2pm</td>
                  <td><img src={doc} alt="doc_img" /></td>
                </tr>


              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>

  );
}

export default Dashboard;