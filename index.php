<!-- https://colorhunt.co/palette/d6efd880af81508d4e1a5319 -->
<html font="roboto">
    <head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title> Home </title>
        <link href="style.css" rel="stylesheet">
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    </head>
    <body>
        <nav data-aos="fade-down">
            <!-- working for menu list  -->
            <div class="hamburger-div">
                <div class="hamburger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="list-item">
                    <ul>
                        <li>
                            <span>Projects</span>
                            <ul>
                                <li> 
                                    <span>Web Designing</span>
                                    <ul>
                                        <li><a href="iicsProject/index.html">IICS project</a> </li>
                                        <li> <a href="calculator/index.html">Calculator </a> </li>
                                        <li> <a href="movingCar/index.html">Animated car</a> </li>
                                        <li> <a href="ticTacToe/index.html">Tic Tac Toe</a> </li>
                                        <li> <a href="portfolioForFriend/index.html">Portfolio website for a friend</a> </li>
                                    </ul>    
                                </li>
                                <li>
                                    <span>Python</span>
                                    <ul>
                                        <li> <a href="">Nothing</a> </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span href="">Contact</span>
                            <ul>
                                <li> <a href="https://www.instagram.com/celestial_weaver?igsh=MTFlbHhkdW85c3VsYQ==">Instagram</a> </li>
                                <li> <a href="">Facebookk</a> </li>
                                <li> <a href="https://wa.me/qr/LXD6CDXS63AYC1">Whatsapp</a> </li>
                                <li> <a href="">LinkedIn</a> </li>
                                <li> <a href="">Github</a> </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            
            <!-- working for search bar  -->
            <div class="search">
                <input type="text" placeholder="Type here...">
                <button onclick="search();">Search</button>
            </div>
            <div>
                <img src="logo.png">
            </div>
        </nav>
        <header> 
            <p class="celestial" align="left">Celestial</p>
            <br>
            <p class="Weaver" align="right">Weaver</p>
        </header>

        <!-- working for main page body  -->
         <center>
            <section>

                <?php
                    $show = array("vivekPortfolio","portfolioForFriend","ticTacToe","iicsProject","stonePaperScissor","carAnimation");
                    for($i=0;$i<6;$i++){
                        echo "
                            <div class='show' data-aos='zoom-in-down' data-aos-duration='1000'>
                                <hr>
                                <div>
                                    <img src='$show[$i]/demoPicture.png' class='demoPicture'>
                                </div>            
                        ";
                        include "$show[$i]/description.html";
                        echo "<hr></div>";
                ?>
                <?php } ?>

                <div class="show2" data-aos="zoom-in-down" data-aos-duration="1000"> 
                    <hr>
                    <div>
                        <img src="calculator/demoPicture.png">
                    </div>
                    <div>
                        <div>
                            <br><br>
                            <h2>Calculator</h2><br>
                            <b>Link</b> <a href="https://localhost/mainWebsite/$i/index.html">Click here</a>
                            <b>Raw Files</b> <a href="https://drive.google.com/drive/folders/1o3nUY8fOupc3LzNcUnVCTBvTIPuXD5jp?usp=drive_link">Click here</a>
                            <p>
                                This project was created to practice java script
                            </p>
                            <br>
                            <b>Languages used:-</b>
                            <div>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Java Script</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr>
                </div>
            </section>
         </center>
         <br><br>
         <footer>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5457586637326!2d77.3416917752251!3d28.613400934949684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce53d525df327%3A0x66f900cafbfb0b9a!2sPragati%20Vihar%2C%20Shital%20Vihar%2C%20Khora%20Colony%2C%20Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20110096!5e0!3m2!1sen!2sin!4v1708770477661!5m2!1sen!2sin" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </footer>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script> AOS.init(); </script>
    </body>
</html>