import React from 'react'

const Arc0304 = () => {
  return (

<div id="wrapper">

  <div id="container" class="<?php echo $adm_menu_cookie['container']; ?>">

    <div id="tabMenu">
      <input type="radio" id="tab1" name="tabs" checked />
      <label for="tab1">건축계획 학습자료실</label>
				  
			<input type="radio" id="tab2" name="tabs"/>
			<label for="tab2">건축시공 학습자료실</label>
				  
			<input type="radio" id="tab3" name="tabs" />
			<label for="tab3">건축구조 학습자료실</label>
				  
			<input type="radio" id="tab4" name="tabs" />
			<label for="tab4">건축설비 학습자료실</label>
				  
			<input type="radio" id="tab5" name="tabs"  />
			<label for="tab5">건축법규 학습자료실</label>

            <div id="notice1" class="tabContent">
                <object type="application/pdf" data="./pdf/soft.pdf#toolbar=1&navpane=0" width="100%" height="1280px">
					<embed src="./pdf/01.ArchiPlan.pdf#toolbar=1&navpane=0" type="application/pdf" width="100%" height="1280px" />
					<param name="initZoom" value="fitToPage" />
				</object>	
            </div>
				  
			<div id="notice2" class="tabContent">
                <object type="application/pdf" data="./pdf/soft.pdf#toolbar=1&navpane=0" width="100%" height="1280px">
					<embed src="./pdf/02.ArchiConstruction.pdf#toolbar=1&navpane=0" type="application/pdf" width="100%" height="1280px" />
					<param name="initZoom" value="fitToPage" />
				</object>	
            </div>
				  
			<div id="notice3" class="tabContent">
                <object type="application/pdf" data="./pdf/soft.pdf#toolbar=1&navpane=0" width="100%" height="1280px">
					<embed src="./pdf/03.ArchiStructure.pdf#toolbar=1&navpane=0" type="application/pdf" width="100%" height="1280px" />
					<param name="initZoom" value="fitToPage" />
				</object>	
            </div>
				  
			<div id="notice4" class="tabContent">
                <object type="application/pdf" data="./pdf/soft.pdf#toolbar=1&navpane=0" width="100%" height="1280px">
					<embed src="./pdf/04.ArchiFacilities.pdf#toolbar=1&navpane=0" type="application/pdf" width="100%" height="1280px" />
					<param name="initZoom" value="fitToPage" />
				</object>	
            </div>
				  
			<div id="notice5" class="tabContent">
                <object type="application/pdf" data="./pdf/soft.pdf#toolbar=1&navpane=0" width="100%" height="1280px">
					<embed src="./pdf/05.ArchiLaws.pdf#toolbar=1&navpane=0" type="application/pdf" width="100%" height="1280px" />
					<param name="initZoom" value="fitToPage" />
				</object>	
            </div>
		</div>	
		
	</div>
</div>

  )
}

export default Arc0304