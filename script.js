function addNewField1() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.setAttribute('rows', 3);
    newNode.classList.add('mt-2')

    let weOb = document.getElementById('we');
    let weAddButtonOb = document.getElementById('weAddButton');

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewField2() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('edField');
    newNode.setAttribute('rows', 3);
    newNode.classList.add('mt-2')

    let edOb = document.getElementById('ed');
    let edAddButtonOb = document.getElementById('edAddButton');

    edOb.insertBefore(newNode, edAddButtonOb);
}

function addNewField3() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('ceField');
    newNode.setAttribute('rows', 3);
    newNode.classList.add('mt-2')

    let ceOb = document.getElementById('ce');
    let ceAddButtonOb = document.getElementById('ceAddButton');

    ceOb.insertBefore(newNode, ceAddButtonOb);
}

function addNewField4() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eduField');
    newNode.setAttribute('rows', 3);
    newNode.classList.add('mt-2')

    let eduOb = document.getElementById('edu');
    let eduAddButtonOb = document.getElementById('eduAddButton');

    eduOb.insertBefore(newNode, eduAddButtonOb);
}

function generateCv() {

    //name field
    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1');

    nameT1.innerHTML = nameField;
    document.getElementById('nameT2').innerHTML= nameField;

    //contact field
    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;

    //email field
    document.getElementById('emailT').innerHTML = document.getElementById('emailField').value;

    //address field
    document.getElementById('addT1').innerHTML = document.getElementById('addressField').value;

    //linkedin field
    document.getElementById('linkedT').innerHTML = document.getElementById('linkedinField').value;

    //github field
    document.getElementById('gitT').innerHTML = document.getElementById('gitField').value;

    //fb field
    document.getElementById('instaT').innerHTML = document.getElementById('instaField').value;

    //stack field
    document.getElementById('stT').innerHTML = document.getElementById('stField').value;

    //objective field
    document.getElementById('objectiveT').innerHTML = document.getElementById('objField').value;

    //QualficationAcademic 
    let eduqual = document.getElementsByClassName('eduField'); //getting obj of eduField
    let str3 = ''

    for(let e of eduqual) {
        str3 = str3 + `<li> ${e.value} </li>`
    }
    document.getElementById('eduT').innerHTML = str3;
    
    //work exp
    let workExps = document.getElementsByClassName('weField'); //getting obj of weField
    let str = ''

    for(let e of workExps) {
        str = str + `<li> ${e.value} </li>`
    }
    document.getElementById('weT').innerHTML = str;


    

    //project experience
    let eduQua = document.getElementsByClassName('edField'); //getting obj of weField
    let str1 = ''

    for(let e of eduQua) {
        str1 = str1 + `<li> ${e.value} </li>`
    }
    document.getElementById('edT').innerHTML = str1;

    

    //cert 
    let cerT = document.getElementsByClassName('ceField'); //getting obj of weField
    let str2 = ''

    for(let e of cerT) {
        str2 = str2 + `<li> ${e.value} </li>`
    }
    document.getElementById('cerT').innerHTML = str2;

    document.getElementById('resume-form').style.display = 'none';
    document.getElementById('footer').style.display = 'none';
    document.getElementById('resume-template').style.display = 'block';

    //Image field
    let file = document.getElementById('imgField').files[0]; //getting first(index at 0) file
    console.log(file);
    let reader = new FileReader();

    reader.readAsDataURL(file);
    
    console.log(reader.result);
    
    //set the image to template
    reader.onloadend = function () {
        document.getElementById('imgT').src = reader.result;
    };
}
//printCv function


window.onload = function() {
    document.getElementById('downloadCV').addEventListener("click", ()=>{
        const resumePDF = this.document.getElementById("resume-template");
        console.log(resumePDF);
        console.log(window);
        var opt = {
            top:       1,
            bottom:     0,
            filename:     'myfile.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 1 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
            pagebreak: { mode: 'css', before: '#resume-template' }
          };
        html2pdf().from(resumePDF).set(opt).save();
    })
}
