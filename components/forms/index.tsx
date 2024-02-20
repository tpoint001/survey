"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"



const Form = () => {

  const [chkbox, setBox] = useState(false)
  const [chkbox3, setBox3] = useState(false)
 const router= useRouter()
  const handleChange = (e: Event) => {

   const st = e.target.checked
   setBox(st)
  }

  const [sh, setSh] = useState(false)
  const [chkbox1, setBox1] = useState(false)

  const handleCh1 = (e: Event) => {

   const st = e.target.checked
   setBox1(st)
  }

  const handleCh3 = (e: Event) => {

    const st = e.target.checked
    setBox3(st)
   }

  const [chkbox2, setBox2] = useState(false)

  const handleCh2 = (e: Event) => {

   const st = e.target.checked
   setBox2(st)
  }

  const handleValidate = (cl: string) => {

    let cl_name = "."+cl
    const lab_cl = cl_name +"lab"
    const label = document.querySelector(lab_cl)
    const bx = document.querySelectorAll(cl_name)
   // const lab_clist = label?.classList()
    let counter = 0
   bx.forEach(item => {
 //console.log(item)
    if(item.checked)
    counter++
   
   })
    if(counter === 0)
    {
    //   if(!lab_clist.contain("text-danger"))
        label?.classList.add('text-danger')
    }
    else
    {
      //  if(lab_clist.contain("text-danger"))
        label?.classList.remove('text-danger')
    }
    console.log("Counter is",counter)
    return counter
  }

  const validateTxt = (fname: string) => {
    let txt_cl = "."+fname
    const lab_cl = txt_cl + "lab"
    const txt_ele = document.querySelector(txt_cl)
    const txt_lab = document.querySelector(lab_cl)
    const val = txt_ele.value
    console.log("Value is",val)
    if(val === "")
    {
        txt_lab?.classList.add("text-danger")
        return false
    }
return true
    
  }
const handleSubmit = (e: Event) => {

  e.preventDefault()
  // res, str, soc, mn
  const c = handleValidate("mot")
  const r = handleValidate("res")
  const s = handleValidate("soc")
  const h = handleValidate("str")
  const n = handleValidate("mn")
  const tf = validateTxt('txtf')
  if(h === 0 || c === 0 || r === 0 || s === 0 || n === 0 || !tf){
    console.log("Counter cannot be zero")
  return  }
 
  router.push("/message")

}


    return(
        <>

<div className="row justify-content-center p-5">
    <div className="col-lg-10 col-md-12">
        <div className="wrapper">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-wrap">
 <h4 className="mb-4 text-center"> 
       Complete the survey to partake in reward pool of <strong>$500,000</strong>.</h4>	
                        <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="motlab"><span className="text-danger">*</span>
                                            1.What first motivated you to invest in crypto? Select up to 3 options:</label>
                                                            <br />
                                                            <label className="mb-3">
                                                                  <input type="checkbox" className="mot" name="mot" /> Decentralization of currency
                                                              </label>
                                                              <br />
                                                              <label className="mb-3">
                                                                  <input type="checkbox" className="mot" name="mot" /> Potential to make a profit
                                                              </label>
                                                              <br />
                                                              <label className="mb-3">
                                                                  <input type="checkbox" className="mot" name="mot" /> Chance to learn more about blockchain technology
                                                              </label>
                                                              <br />
                                                              <label className="mb-3">
                                                                  <input type="checkbox" className="mot" name="mot" /> Fear of Missing Out [FOMO] among friends / family
                                                              </label>
                                                              <br />
                                                              <label className="mb-3">
                                                                  <input type="checkbox" className="mot" name="res" /> Opportunity to purchase goods / services
                                                              </label>
                                                              <br />
                                                              <label className="mb-3">
                                                                  <input type="checkbox" className="mot" name="mot" /> Chance to diversify investment portfolio
                                                              </label>
                                                              <br />
      <label className="mb-3">
          <input type="checkbox" className="mot moth" name="mot" onChange={(e) => handleChange(e)} /> Others — Please Specify <input type="text" className="form-control" disabled={chkbox? "": "disabled"} name="others" id="other" placeholder="Specify reasons" />
      </label>
                                    </div>
                                </div>
                                <div className="col-md-12"> 
                                    <div className="form-group">
                                        <label className="reslab"><span className="text-danger">*</span>
                                            2. How did you first hear about Binance? Select up to 2 options:</label>
                                                            <br />
                                                            <label className="mb-3">
                                                                  <input type="checkbox" className="res" name="res" /> Google / other search engine
                                                              </label>
                                                              <br />
                                                              <label className="mb-3">
                                                                  <input type="checkbox" className="res" name="res" /> Social media
                                                              </label>
                                                              <br />
                                                              <label className="mb-3">
                                                                  <input type="checkbox" className="res" name="res" /> Recommended by a friend
                                                              </label>
                                                              <br />
                                                              <label className="mb-3">
                                                                  <input type="checkbox" className="res" name="res" /> Review site
                                                              </label>
                                                              <br />
                                                              <label className="mb-3">
                                                                  <input type="checkbox" className="res" name="res" /> YouTube
                                                              </label>
                                                              <br />
                                                              <label className="mb-3">
                                                                  <input type="checkbox" className="res" name="res" /> Advertisement
                                                              </label>
                                                              <br />
                                                              <label className="mb-3">
                                                                  <input type="checkbox" className="res" name="rem" /> TV / news
                                                              </label>
                                                              <br/>
                                                              <label className="mb-3">
                                                                  <input type="checkbox" className="res resoth" name="res" onChange={(e) => handleCh1(e)} /> Others — Please Specify <input type="text" className="form-control" disabled={chkbox1? "": "disabled"} name="others" id="other" placeholder="Specify reasons" />
                                                              </label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="strlab"><span className="text-danger">*</span>
                                            3. How would you describe your predominant trading strategy? Select 1:</label>
                                                            <br />
                                                            <label className="mb-3">
                                                                  <input type="checkbox" className="str" name="str" /> Actively trade positions (short-term)
                                                              </label>
                                                              <br />
                                                              <label className="mb-3">
                                                                  <input type="checkbox" className="str" name="str" /> Speculate on different assets (medium term)
                                                              </label>
                                                              <br />
                                                              <label className="mb-3">
                                                                  <input type="checkbox" className="str" name="res" /> Buy and hold (long-term)
                                                              </label>
                                        </div>
                      
                                        <div className="mb-3">
                                        <label className="mnlab"><span className="text-danger">*</span> 
                      4. Through which medium do you typically hear about our new product launches, offers, and services? Select 1
</label>
                                      <br />
                                      <label className="mb-3">
                                            <input type="checkbox" className="mn" name="res" /> Email
                                        </label>
                                        <br />
                                        <label className="mb-3">
                                            <input type="checkbox" className="mn" name="res" /> Social media
                                        </label>
                                        <br />
                                        <label className="mb-3">
                                            <input type="checkbox" className="mn" name="res" /> News
                                        </label>
                                        <br />
                                        <label className="mb-3">
                                            <input type="checkbox" className="mn" name="res" /> Friends and family
                                        </label>
                                        <br />
                                        <label className="mb-3">
                                            <input type="checkbox" className="mn" name="res" /> I’m generally not aware of any new product launches, offers, or services
                                        </label>
                                        <br />
                                        <label className="mb-3">
                                        <input type="checkbox" className="res resoth" name="res" onChange={(e) => handleCh3(e)} /> Others — Please Specify <input type="text" className="form-control" disabled={chkbox3? "": "disabled"} name="others" id="other" placeholder="Specify reasons" />
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="col-md-12 mb-3">
                                    <div className="form-group">
                                        <label className="txtflab"><span className="text-danger">*</span> 
                                            5.  Have you had any issues or problems with Binance’s products or services? If so, please describe them. ( {300} words or less) </label>
                                        <textarea name="message" className="form-control txtf" id="message" cols={30} rows={8} placeholder="Message"></textarea>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="soclab"><span className="text-danger">*</span> 
                                            6. Which social media channel do you use the most? Select 1 </label>
                                            <br />
                                            <label className="mb-3">
                                                                  <input type="checkbox" className="soc" name="res" /> Twitter
                                                              </label>
                                                              <br />
                                            
                                                              <label className="mb-3">
                                                                  <input type="checkbox" className="soc" name="res" /> Instagram
                                                              </label>
                                                              <br />
                                            
                                                              <label className="mb-3">
                                                                  <input type="checkbox" className="soc" name="res" /> Facebook
                                                              </label>
                                                              <br />
                                            
                                                              <label className="mb-3">
                                                                  <input type="checkbox" className="soc" name="res" /> Telegram
                                                              </label>
                                                              <br />
                                            
                                            
                                                              <label className="mb-3">
                                                                  <input type="checkbox" className="soc" name="res" /> Tiktok
                                                              </label>
                                                              <br />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="submit" onClick={(e) => handleSubmit(e)} value="Submit" className="btn btn-lg btn-warning w-100 d-inline-block" />
                                        <div className="submitting"></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  </>
    )
}

export default Form