export default function SkillInfoCards() {
    const cardProjets = document.querySelectorAll('.boxIcon');
    const textInfoSkills = document.querySelector('.descriptionSkills');
    const titleSkill = document.querySelector('.titleSkill');
    const urlTextInfo = './js/info/skillInfo.json'


    fetch(urlTextInfo, {
        headers: {
            accept: "aplication/json"
        }
    })
        .then(
            
            response => response.json()
        )

        .then(

            res => {
                const infoJson = res.infoSkill

                function SetInfo() {
                    for (var i = 0; i < cardProjets.length; i++) {
                        cardProjets[i].addEventListener("click", ()=>{
                            titleSkill.innerHTML = `${infoJson[6].nome}`
                            textInfoSkills.innerHTML = `${infoJson[6].text}`
                            }
                        )
                    }
                }
                SetInfo()
            }
        )
}