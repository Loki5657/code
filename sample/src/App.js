// import logo from './logo.svg';
import './App.css';
import logo from './images/arrow_drop_down_black_24dp.svg';
import  add from './images/add_black_24dp.svg';
import star_black from './images/star_black_24dp.svg';
import profile from './images/account_circle_black_24dp.svg';
import edit from './images/edit_icon.svg';
import doc from './images/doc_icon_ff.svg';
import eye from './images/eye.svg';
import close from './images/close_black_24dp.svg';


function App() {
  return (
    <div className="App">
      <div className="row main_clss ">


        <img className="col logo_img" src=".." alt="logo_image" />

        <div className="col title_component">Dashboard</div>
        <div className="col title_component2">Customer</div>

        <div className="col title_component2">Technician</div>

        <div className=" col"><img className=" profile_img" src={profile} alt="profile_image" /></div>
        <div className=" col"> <img className=" profile" src={logo} alt="profile_drop" /></div>

      </div>
      <div className="col-sm=12 main ">
        <div className="div_compon">
          <div className="first_div">

            <div className="container mt-2">
              <div><a className="link_Technician" href="www.Technician.com">&lt;TECHNICIAN</a>
              </div>

            </div>
            <div className="container mt-3 main_clss">
              <img className=" col profile_component" src={profile} alt="No image found" />
              <h2 className="name_tag">John Smith</h2>
              <div>
                <img src={star_black} alt="star_image" />
                <img src={star_black} alt="star_image" />
                <img src={star_black} alt="star_image" />
                <img src={star_black} alt="star_image" />
                <img src={star_black} alt="star_image" />
                <span className="cls_4.2">4.2 Average</span>
              </div>
              <hr />
              <label className="tech_info" for="assign">TECHNICAL INFORMATION</label><br />
              <div className="mail_compo">
                <p className="mail_component1">Email</p>
                <p className="mail_component">shimt@gmail.com</p>
              </div>
              <div className="mail_compo">
                <p className="mail_component1">Phone Number</p>
                <p className="mail_component">999-999-9999</p>
              </div>
              <div className="mail_compo">
                <p className="mail_component1">Member Since</p>
                <p className="mail_component">02-02-2022</p>
              </div>
              <div class="container mt-3  mig_div">


                <button type="button" class="btn btn-success btn_clss" data-bs-toggle="modal"
                  data-bs-target="#myModal">
                  EDIT INFORMATION
                </button>

                <img class="img_div" src={edit} alt="edit_img" />
              </div>
            </div>

          </div>
          <hr class="hr_tag" />
          <div class="div_clss_compo">
            <label class="tech_info" for="assign">TECHNICAL DOCUMENTS</label><br />
            <div class="mail-0">
              <p class="doc_component1"><img src={doc} alt="doc_img" />
              </p>
              <p class="doc_component">Jsmith.pdf</p>
              <p class="eye_component1"><img src={eye} alt="eye_image" />
              </p>
              <p class="eye_component"><img src={close} alt="close_image" /></p>
            </div>
            <div class="mail_compo">
              <p class="doc_component1"><img src={doc} alt="doc_img" />
              </p>
              <p class="doc_component">Jsmith.pdf</p>
              <p class="eye_component1"><img src={eye} alt="eye_image" />
              </p>
              <p class="eye_component"><img src={close}  alt="close_image" /></p>
            </div>
            <div class="upload_add">
              <button type="button" class="btn btn-success btn_clss">
                UPLOAD A FILE
              </button>
              <img class="upload_div" src="../tbl_2_assgn/add_black_24dp.svg" alt="doc_img" />
            </div>
          </div>
        </div>
      
        <div class="col-sm=12 inner_div">
          <table class="table tb_padding ">
            <thead class="table-light">
              <tr>

                <input class=" col schedule_btn" type="button" value="Scheduled" />
                <input class=" col  service_btn" type="button" value="Completed Services" />


              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="../tbl_2_assgn/event_black_24dp.svg" alt="No image found" /></td>
                <td>1531 NE 39th Street</td>
                <td>March 20th 2020</td>
                <td>2pm</td>
                <td><img src="../tbl_2_assgn/visibility_black_24dp.svg" alt="No image found" /></td>
              </tr>
              <tr>
                <td><img src="../tbl_2_assgn/event_black_24dp.svg" alt="No image found" /></td>
                <td>1531 NE 39th Street</td>
                <td>March 20th 2020</td>
                <td>2pm</td>
                <td><img src="../tbl_2_assgn/visibility_black_24dp.svg" alt="No image found" /></td>
              </tr>
              <tr>
                <td><img src="../tbl_2_assgn/event_black_24dp.svg" alt="No image found" /></td>
                <td> 1531 NE 39th Street</td>
                <td>March 20th 2020</td>
                <td>2pm</td>
                <td><img src="../tbl_2_assgn/visibility_black_24dp.svg" alt="No image found" /></td>
              </tr>
              <tr>
                <td><img src="../tbl_2_assgn/event_black_24dp.svg" alt="No image found" /></td>
                <td>1531 NE 39th Street</td>
                <td>March 20th 2020</td>
                <td>2pm</td>
                <td><img src="../tbl_2_assgn/visibility_black_24dp.svg" alt="No image found" /></td>
              </tr>
              <tr>
                <td><img src="../tbl_2_assgn/event_black_24dp.svg" alt="No image found" /></td>
                <td>1531 NE 39th Street</td>
                <td>March 20th 2020</td>
                <td>2pm</td>
                <td><img src="../tbl_2_assgn/visibility_black_24dp.svg" alt="No image found" /></td>
              </tr>
              <tr>
                <td><img src="../tbl_2_assgn/event_black_24dp.svg" alt="No image found" /></td>
                <td> 1531 NE 39th Street</td>
                <td>March 20th 2020</td>
                <td>2pm</td>
                <td><img src="../tbl_2_assgn/visibility_black_24dp.svg" alt="No image found" /></td>
              </tr>


            </tbody>
          </table>









        </div>

      </div>

    </div>
  );
}

export default App;
