"use strict";

window.Config = {

    /*
    |--------------------------------------------------------------------------
    | Preloader configuration
    |--------------------------------------------------------------------------
    */
    preloader:
    {
        duration: 1, // Default preloader duration in ms
    },

    /*
    |--------------------------------------------------------------------------
    | Intro section configuration
    |--------------------------------------------------------------------------
    | Here you can find all settings of Intro section.
    */

    /**
     * Typing Texts module configuration
     */
    introStaticText: "LILO.", // Static text
    introTypingTexts: [ // Set of texts to display in Typing Texts module
        "Zone",
        "Kids",
        "Talks",
        "Etc",
        "*"
    ],


    /*
    |--------------------------------------------------------------------------
    | AOS - Animate on Scroll
    |--------------------------------------------------------------------------
    | This template uses AOS - small library to animate elements on your page 
    | when you scroll. Here you can configure global settings.
    | All available options you can find at https://github.com/michalsnik/aos
    */
    AOS:
    {
        offset: 120, // Change offset to trigger animations sooner or later (px)
        duration: 600, // Duration of animation (accepted values from 50 to 3000, with step 50ms)
        easing: 'ease-out-quart', // Choose timing function to ease elements in different ways 
        delay: 100, // Delay animation (ms)
        anchor: null, // Anchor element, whose offset will be counted to trigger animation instead of actual elements offset
        placement: 'top-bottom', // Anchor placement - which one position of element on the screen should trigger animation
        once: true, // Choose wheter animation should fire once, or every time you scroll up/down to element      
    },

    /*
    |--------------------------------------------------------------------------
    | Translations
    |--------------------------------------------------------------------------
    | If you need to translate not included in HTML file texts,
    | this section is for you. Following object contains words used 
    | in JavaScript modules.
    */

    translations:
    {
        of: 'of', // eg. 3 of 8
        all: 'all',
        previous: 'previous',
        next: 'next',
        sendMessage: 'Send message'
    }

}
