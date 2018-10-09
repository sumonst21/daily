var mapSection = document.getElementById('map-section');

mapSection.addEventListener('click', (e) => {

    console.log('e.target', e.target.parentNode);

    e.target.parentNode

    switch (e.target.parentNode.id) {

        case 'Maine':
            removeElementorActiveClass();
            document.getElementById('elementor-tab-title-1591').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-1591').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-1591').style.display = 'block';
            break;

        case 'New_Hampshire':
            removeElementorActiveClass();
            document.getElementById('elementor-tab-title-1592').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-1592').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-1592').style.display = 'block';
            break;

        case 'Vermont':
            removeElementorActiveClass();
            document.getElementById('elementor-tab-title-1593').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-1593').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-1593').style.display = 'block';
            break;

        case 'Massachusetts':
            removeElementorActiveClass();
            document.getElementById('elementor-tab-title-1594').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-1594').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-1594').style.display = 'block';
            break;

        case 'Rhode_Island':
            removeElementorActiveClass();
            document.getElementById('elementor-tab-title-1595').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-1595').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-1595').style.display = 'block';
            break;

        case 'Connecticut':
            removeElementorActiveClass();
            document.getElementById('elementor-tab-title-1596').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-1596').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-1596').style.display = 'block';

            break;

        case 'New_York':
            removeElementorActiveClass();
            document.getElementById('elementor-tab-title-1597').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-1597').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-1597').style.display = 'block';
            break;

        case 'Pennsylvania':
            removeElementorActiveClass();
            document.getElementById('elementor-tab-title-1598').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-1598').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-1598').style.display = 'block';
            break;

        case 'New_Jersey':
            removeElementorActiveClass();
            document.getElementById('elementor-tab-title-1599').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-1599').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-1599').style.display = 'block';
            break;

        case 'Delaware':
            removeElementorActiveClass();
            document.getElementById('elementor-tab-title-15910').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-15910').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-15910').style.display = 'block';
            break;

        case 'Maryland':
            removeElementorActiveClass();
            document.getElementById('elementor-tab-title-15911').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-15911').classList.add('elementor-active');
            document.getElementById('elementor-tab-content-15911').style.display = 'block';
            break;

        default:
            console.log('default msg');
            break;
    }

})


function removeElementorActiveClass() {
    
    var tabs = document.getElementsByClassName('elementor-tab-title');
    var tabsContent = document.getElementsByClassName('elementor-tab-content');

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('elementor-active')
    }

    for (var i = 0; i < tabsContent.length; i++) {
        tabsContent[i].classList.remove('elementor-active')
        tabsContent[i].style.display = 'none';
    }

}



// var meState = document.getElementById('Maine');

// var nhState = document.getElementById('New_Hampshire');

// var vtState = document.getElementById('Vermont');

// var maState = document.getElementById('Massachusetts');

// var riState = document.getElementById('Rhode_Island');

// var ctState = document.getElementById('Connecticut');

// var nyState = document.getElementById('New_York');

// var peState = document.getElementById('Pennsylvania');

// var njState = document.getElementById('New_Jersey');

// var deState = document.getElementById('Delaware');

// var mdState = document.getElementById('Maryland');


// var meTab = document.getElementById('elementor-tab-title-1591');

// var nhTab = document.getElementById('elementor-tab-title-1592');

// var vtTab = document.getElementById('elementor-tab-title-1593');

// var maTab = document.getElementById('elementor-tab-title-1594');

// var riTab = document.getElementById('elementor-tab-title-1595');

// var ctTab = document.getElementById('elementor-tab-title-1596');

// var nyTab = document.getElementById('elementor-tab-title-1597');

// var peTab = document.getElementById('elementor-tab-title-1598');

// var njTab = document.getElementById('elementor-tab-title-1599');

// var deTab = document.getElementById('elementor-tab-title-15910');

// var mdTab = document.getElementById('elementor-tab-title-15911');

