let getHTMLTemplate = (data) => {
    return `<!doctype html>
    <html>
    
    <head>
        <meta name="viewport" content="width=device-width">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Simple Transactional Email</title>
        
    </head>
    
    <body class="" style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; height: 100%; margin: 20px; display: flex; justify-content: center; align-items: center;">
        <div class="contact-card" style="width: 400px; height: auto; padding: 40px; border-radius: 4px; background: linear-gradient(#eff3ff, #dee2ed); display: inline-block;">
            <div class="contact-profile" style="width: 140px; height: 140px; border-radius: 100%; margin: 0 auto; background: linear-gradient(#4cb4ff, #4c79ff); line-height: 140px; text-align: center; font-family: sans-serif; font-size: 48px;">iD</div>
            <div class="contact-info-container" style="margin-top: 40px; cursor: default;">
                <div class="contact-info" style="width: 100%; height: 60px; background-color: #fff; box-shadow: 0px 2px 6px 0px hsla(0, 0%, 0%, 0.1); padding-left: 20px; padding-right: 20px; box-sizing: border-box; border-radius: 2px; margin-top: 10px;">
                    <div class="material-icons" style="width: 30px; height: 30px; background-repeat: no-repeat; margin-top: 19px; background-image: url('https://github.com/google/material-design-icons/blob/master/social/ios/ic_person.imageset/ic_person.png?raw=true'); float: left; color: rgba(0, 0, 0, 0.81); line-height: 60px;"></div>
                    <div class="contact-data" style="font-family: sans-serif; font-size: 16px; margin-left: 20px; float: left; line-height: 60px;">${data.name}</div>
                </div>
                <div class="contact-info" style="width: 100%; height: 60px; background-color: #fff; box-shadow: 0px 2px 6px 0px hsla(0, 0%, 0%, 0.1); padding-left: 20px; padding-right: 20px; box-sizing: border-box; border-radius: 2px; margin-top: 10px;">
                    <div class="material-icons" style="width: 30px; height: 30px; background-repeat: no-repeat; margin-top: 19px; background-image: url('https://github.com/google/material-design-icons/blob/master/communication/ios/ic_email.imageset/ic_email.png?raw=true'); float: left; color: rgba(0, 0, 0, 0.81); line-height: 60px;"></div>
                    <div class="contact-data" style="font-family: sans-serif; font-size: 16px; margin-left: 20px; float: left; line-height: 60px;"><a href="mailto:${data.email}">${data.email}</a></div>
                </div>
                <div class="contact-info" style="width: 100%; height: 60px; background-color: #fff; box-shadow: 0px 2px 6px 0px hsla(0, 0%, 0%, 0.1); padding-left: 20px; padding-right: 20px; box-sizing: border-box; border-radius: 2px; margin-top: 10px;">
                    <div class="material-icons" style="width: 30px; height: 30px; background-repeat: no-repeat; margin-top: 19px; background-image: url('https://github.com/google/material-design-icons/blob/master/communication/ios/ic_phone.imageset/ic_phone.png?raw=true'); float: left; color: rgba(0, 0, 0, 0.81); line-height: 60px;"></div>
                    <div class="contact-data" style="font-family: sans-serif; font-size: 16px; margin-left: 20px; float: left; line-height: 60px;"><a href="tel:${data.phone}">${data.phone}</a></div>
                </div>
                <div class="contact-data-container" style="width: 100%; height: auto; background-color: #fff; box-shadow: 0px 2px 6px 0px hsla(0, 0%, 0%, 0.1); padding: 20px; box-sizing: border-box; border-radius: 2px; margin-top: 10px;">
                    <div class="material-icons" style="width: 30px; height: 30px; background-repeat: no-repeat; display: inline-block; position: relative; vertical-align: top; max-width: 80%; word-break: break-word; color: rgba(0, 0, 0, 0.81);background-image: url('https://github.com/google/material-design-icons/blob/master/communication/ios/ic_location_on.imageset/ic_location_on.png?raw=true');"></div><div class="contact-data" style="font-family: sans-serif; font-size: 16px; margin-left: 20px; display: inline-block; position: relative; vertical-align: top; max-width: 80%; word-break: break-word;"><a target="_blank" href="https://maps.google.com/?q=${data.address}">${data.address}</a></div>
                </div>
                <div class="contact-info" style="width: 100%; height: 60px; background-color: #fff; box-shadow: 0px 2px 6px 0px hsla(0, 0%, 0%, 0.1); padding-left: 20px; padding-right: 20px; box-sizing: border-box; border-radius: 2px; margin-top: 10px;">
                    <div class="material-icons" style="width: 30px; height: 30px; background-repeat: no-repeat; margin-top: 19px; background-image: url('https://github.com/google/material-design-icons/blob/master/action/ios/ic_search.imageset/ic_search.png?raw=true'); float: left; color: rgba(0, 0, 0, 0.81); line-height: 60px;"></div>
                    <div class="contact-data" style="font-family: sans-serif; font-size: 16px; margin-left: 20px; float: left; line-height: 60px;">${data.referral}</div>
                </div>
                <div class="contact-data-container" style="width: 100%; height: auto; background-color: #fff; box-shadow: 0px 2px 6px 0px hsla(0, 0%, 0%, 0.1); padding: 20px; box-sizing: border-box; border-radius: 2px; margin-top: 10px;">
                    <div class="material-icons" style="width: 30px; height: 30px; background-repeat: no-repeat; display: inline-block; position: relative; vertical-align: top; max-width: 80%; word-break: break-word; color: rgba(0, 0, 0, 0.81); background-image: url('https://github.com/google/material-design-icons/blob/master/action/ios/ic_subject.imageset/ic_subject.png?raw=true');"></div>
                    <div class="contact-data" style="font-family: sans-serif; font-size: 16px; margin-left: 17px; display: inline-block; position: relative; vertical-align: top; max-width: 80%; word-break: break-word; white-space: pre-wrap;">${data.desc}</div>
                </div>
            </div>
        </div>
    </body>
    
    </html>`;
}

export default getHTMLTemplate;