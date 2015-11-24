/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*Script do scroll*/            
      jQuery(document).ready(function($) { 
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600);
   });
   
   /*Script menu mobile*/
   $("#btn-mobile").click(function(){
       $(".menu-mobile ul").toggle(600);
       
   });
   $(".menu-mobile ul").click(function(){
       $(".menu-mobile ul").toggle(600);
       
   });
});

