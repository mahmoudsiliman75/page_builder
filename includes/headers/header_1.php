<!-- START:: INCLUDING THE HEADER -->
<?php include('../../layouts/TheHeader.php')?>
<!-- END:: INCLUDING THE HEADER -->

<div class="main_content">
  <!-- START:: LARGE SCREENS NAVBAR -->
  <nav class="main_nav_1 d-flex justify-content-between align-items-center">
    <!-- START:: THE LOGO -->
    <div class="site-logo">
      <a href="index.php">
        <img src="../../assets/media/headers_logos/header_logo.png" alt="The Logo">
      </a>
    </div>
    <!-- END:: THE LOGO -->

    <!-- START:: NAV LINKS -->
    <div class="nav-links">
      <ul class="list-unstyled d-flex align-items-center justify-content-center mb-0">
        <li class="active"> 
          <a href="javascript:;" class="dropdown_toggeler"> Home </a>
        </li>

        <li> 
          <a href="javascript:;" class="dropdown_toggeler"> About Us </a>
        </li>

        <li> 
          <a href="javascript:;" class="dropdown_toggeler"> Services </a>
        </li>

        <li> 
          <a href="javascript:;" class="dropdown_toggeler"> FAQs </a>
        </li>

        <li> 
          <a href="javascript:;" class="dropdown_toggeler"> Our Team </a>
        </li>

        <li> 
          <a href="javascript:;" class="dropdown_toggeler"> Portfolio </a>
        </li>

        <li> 
          <a href="javascript:;" class="dropdown_toggeler"> Products </a>
        </li>

        <li> 
          <a href="javascript:;" class="dropdown_toggeler"> Blog </a>
        </li>

        <li> 
          <a href="javascript:;" class="dropdown_toggeler"> Contact Us </a>
        </li>
      </ul>
    </div>
    <!-- START:: NAV LINKS -->

    <div class="menu_btns d-flex align-items-center">
      <!-- START:: LANG BUTTON -->
      <div class="lang-button mx-2">
        <a href="#"> 
          <span class="en"> E </span>
          <span class="ar"> ع </span>
          <span class="circle"></span>
        </a>
      </div>
      <!-- END:: LANG BUTTON -->

      <!-- START:: MENU BUTTON -->
      <button id="open_menu" class="menu_btn mx-2">
        <i class="fas fa-bars"></i>
      </button>
      <!-- END:: MENU BUTTON -->
    </div>
  </nav>
  <!-- END:: LARGE SCREENS NAVBAR -->

  <!-- START:: SMALL SCREENS MENU -->
  <div class="small_menu">
    <div class="btn_box">
      <button id="colse_menu">
        <i class="far fa-times-circle"></i>
      </button>
    </div>

    <ul class="list-unstyled mb-0">
      <li class="active"> 
        <a href="javascript:;" class="dropdown_toggeler"> Home </a>
      </li>

      <li> 
        <a href="javascript:;" class="dropdown_toggeler"> About Us </a>
      </li>

      <li> 
        <a href="javascript:;" class="dropdown_toggeler"> Services </a>
      </li>

      <li> 
        <a href="javascript:;" class="dropdown_toggeler"> FAQs </a>
      </li>

      <li> 
        <a href="javascript:;" class="dropdown_toggeler"> Our Team </a>
      </li>

      <li> 
        <a href="javascript:;" class="dropdown_toggeler"> Portfolio </a>
      </li>

      <li> 
        <a href="javascript:;" class="dropdown_toggeler"> Products </a>
      </li>

      <li> 
        <a href="javascript:;" class="dropdown_toggeler"> Blog </a>
      </li>

      <li> 
        <a href="javascript:;" class="dropdown_toggeler"> Contact Us </a>
      </li>

      <li> 
        <a href="javascript:;" class="dropdown_toggeler"> Theme </a>
      </li>
    </ul>
  </div>
  <!-- END:: SMALL SCREENS MENU -->

  <!-- START:: INDEX2 HOME SLIDER -->
  <div id="home_slider" class="carousel carousel_2 slide carousel-fade" data-ride="carousel">

    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../../assets/media/slider/slide1.jpeg" class="d-block" alt="Slide 1">
      </div>

      <div class="carousel-item">
        <img src="../../assets/media/slider/slide2.jpeg" class="d-block" alt="Slide 2">
      </div>

      <div class="carousel-item">
        <img src="../../assets/media/slider/slide3.jpg" class="d-block" alt="Slide 3">
      </div>
    </div>

    <div class="section_curve_wraper">
      <img src="../../assets/media/shapes/banner-15-bottom.png">
    </div>

    <a class="carousel-control-prev" href="#home_slider" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#home_slider" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <!-- END:: INDEX2 HOME SLIDER -->
</div>

<!-- START:: INCLUDING THE FOOTER -->
<?php include('../../layouts/TheFooter.php')?>
<!-- END:: INCLUDING THE FOOTER -->