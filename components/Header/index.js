// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.createElement('div');
    header.classList.add('header');
    // created header & added class/element

    const headerDate = document.createElement('span');
    headerDate.classList.add('date');
    headerDate.textContent = 'SMARCH 28, 2019';
    //created headerDate & added class/element/textcontent

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Lambda Times';
    //created headerTitile & added element & textContent

    const headerTemp = document.createElement('span');
    headerTemp.classList.add('temp');
    headerTemp.textContent = '98°';
    //created headerTemp & added element/class/textContent


    header.append(headerDate);
    header.append(headerTitle);
    header.append(headerTemp);
    //appended data
  
    return header;
    //unite header
  }
  
  const headerContainer = document.querySelector('.header-container');
  //created headerContainer
  headerContainer.append(Header());
  //applied information