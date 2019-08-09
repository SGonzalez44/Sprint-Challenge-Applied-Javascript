// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics

axios.get('https://lambda-times-backend.herokuapp.com/topics').then(att => 
att.data.topics.forEach(atr => {
const topics = document.querySelector('.topics');
topics.append(createTab(atr));
}),
)

function createTab(attr) {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.textContent = attr;

  return tab;
}
// Once the data is returned console.log it and review the structure.



// Iterate over the topics creating a new Tab component and add it to the DOM under the .topics element.
// The tab component should look like this:
//  <div class="tab">topic here</div>
