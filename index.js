// Input checkbox max 2
const checkboxInputs = document.querySelectorAll('input[type="checkbox"]')
const limit = 2
checkboxInputs.forEach(input => {
  input.onclick = () => {
    console.log('hi')
    const checkboxInputsChecked = document.querySelectorAll('input[type="checkbox"]:checked')
    if (checkboxInputsChecked.length > limit) {
      alert("Você pode ter no máximo 2 habilidades")
      return false // Cancela o clique do usuário
    }
  }
})


// Input range
const inputsRangeType = document.querySelectorAll(".input-range")
inputsRangeType.forEach(input => {
  const inputValue = input.nextElementSibling
  inputValue.textContent = input.value
  
  input.addEventListener("input", () => {
    inputValue.textContent = input.value
  })
})


document.querySelector(".create-character-form").addEventListener("submit", (event) => {
  event.preventDefault()

  const charName = event.target["character-name"].value
  const lastName = event.target["last-name"].value
  const birthdate = event.target.birthdate.value
  const level = event.target.level.value
  const charClass = event.target["character-class"].value

  const specificSkillsInputs = document.querySelectorAll("input[name=skill]:checked")
  const specificSkills = Array.from(specificSkillsInputs).map(skill => {
    return skill.value
  })

  const strength = event.target.strength.value
  const wisdom = event.target.wisdom.value
  const charImage = event.target["character-image"].value
  const origin = event.target.origin.value

  const data = {
    charName,
    lastName,
    birthdate,
    level,
    charClass,
    specificSkills,
    strength,
    wisdom,
    charImage,
    origin
  }

  console.log(data)
})