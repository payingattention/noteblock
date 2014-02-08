angular.module('nbApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/404.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <title>The page you were looking for doesn't exist (404)</title>\n" +
    "  <style>\n" +
    "  body {\n" +
    "    background-color: #EFEFEF;\n" +
    "    color: #2E2F30;\n" +
    "    text-align: center;\n" +
    "    font-family: arial, sans-serif;\n" +
    "  }\n" +
    "\n" +
    "  div.dialog {\n" +
    "    width: 25em;\n" +
    "    margin: 4em auto 0 auto;\n" +
    "    border: 1px solid #CCC;\n" +
    "    border-right-color: #999;\n" +
    "    border-left-color: #999;\n" +
    "    border-bottom-color: #BBB;\n" +
    "    border-top: #B00100 solid 4px;\n" +
    "    border-top-left-radius: 9px;\n" +
    "    border-top-right-radius: 9px;\n" +
    "    background-color: white;\n" +
    "    padding: 7px 4em 0 4em;\n" +
    "  }\n" +
    "\n" +
    "  h1 {\n" +
    "    font-size: 100%;\n" +
    "    color: #730E15;\n" +
    "    line-height: 1.5em;\n" +
    "  }\n" +
    "\n" +
    "  body > p {\n" +
    "    width: 33em;\n" +
    "    margin: 0 auto 1em;\n" +
    "    padding: 1em 0;\n" +
    "    background-color: #F7F7F7;\n" +
    "    border: 1px solid #CCC;\n" +
    "    border-right-color: #999;\n" +
    "    border-bottom-color: #999;\n" +
    "    border-bottom-left-radius: 4px;\n" +
    "    border-bottom-right-radius: 4px;\n" +
    "    border-top-color: #DADADA;\n" +
    "    color: #666;\n" +
    "    box-shadow:0 3px 8px rgba(50, 50, 50, 0.17);\n" +
    "  }\n" +
    "  </style>\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "  <!-- This file lives in public/404.html -->\n" +
    "  <div class=\"dialog\">\n" +
    "    <h1>The page you were looking for doesn't exist.</h1>\n" +
    "    <p>You may have mistyped the address or the page may have moved.</p>\n" +
    "  </div>\n" +
    "  <p>If you are the application owner check the logs for more information.</p>\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('/422.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <title>The change you wanted was rejected (422)</title>\n" +
    "  <style>\n" +
    "  body {\n" +
    "    background-color: #EFEFEF;\n" +
    "    color: #2E2F30;\n" +
    "    text-align: center;\n" +
    "    font-family: arial, sans-serif;\n" +
    "  }\n" +
    "\n" +
    "  div.dialog {\n" +
    "    width: 25em;\n" +
    "    margin: 4em auto 0 auto;\n" +
    "    border: 1px solid #CCC;\n" +
    "    border-right-color: #999;\n" +
    "    border-left-color: #999;\n" +
    "    border-bottom-color: #BBB;\n" +
    "    border-top: #B00100 solid 4px;\n" +
    "    border-top-left-radius: 9px;\n" +
    "    border-top-right-radius: 9px;\n" +
    "    background-color: white;\n" +
    "    padding: 7px 4em 0 4em;\n" +
    "  }\n" +
    "\n" +
    "  h1 {\n" +
    "    font-size: 100%;\n" +
    "    color: #730E15;\n" +
    "    line-height: 1.5em;\n" +
    "  }\n" +
    "\n" +
    "  body > p {\n" +
    "    width: 33em;\n" +
    "    margin: 0 auto 1em;\n" +
    "    padding: 1em 0;\n" +
    "    background-color: #F7F7F7;\n" +
    "    border: 1px solid #CCC;\n" +
    "    border-right-color: #999;\n" +
    "    border-bottom-color: #999;\n" +
    "    border-bottom-left-radius: 4px;\n" +
    "    border-bottom-right-radius: 4px;\n" +
    "    border-top-color: #DADADA;\n" +
    "    color: #666;\n" +
    "    box-shadow:0 3px 8px rgba(50, 50, 50, 0.17);\n" +
    "  }\n" +
    "  </style>\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "  <!-- This file lives in public/422.html -->\n" +
    "  <div class=\"dialog\">\n" +
    "    <h1>The change you wanted was rejected.</h1>\n" +
    "    <p>Maybe you tried to change something you didn't have access to.</p>\n" +
    "  </div>\n" +
    "  <p>If you are the application owner check the logs for more information.</p>\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('/500.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <title>We're sorry, but something went wrong (500)</title>\n" +
    "  <style>\n" +
    "  body {\n" +
    "    background-color: #EFEFEF;\n" +
    "    color: #2E2F30;\n" +
    "    text-align: center;\n" +
    "    font-family: arial, sans-serif;\n" +
    "  }\n" +
    "\n" +
    "  div.dialog {\n" +
    "    width: 25em;\n" +
    "    margin: 4em auto 0 auto;\n" +
    "    border: 1px solid #CCC;\n" +
    "    border-right-color: #999;\n" +
    "    border-left-color: #999;\n" +
    "    border-bottom-color: #BBB;\n" +
    "    border-top: #B00100 solid 4px;\n" +
    "    border-top-left-radius: 9px;\n" +
    "    border-top-right-radius: 9px;\n" +
    "    background-color: white;\n" +
    "    padding: 7px 4em 0 4em;\n" +
    "  }\n" +
    "\n" +
    "  h1 {\n" +
    "    font-size: 100%;\n" +
    "    color: #730E15;\n" +
    "    line-height: 1.5em;\n" +
    "  }\n" +
    "\n" +
    "  body > p {\n" +
    "    width: 33em;\n" +
    "    margin: 0 auto 1em;\n" +
    "    padding: 1em 0;\n" +
    "    background-color: #F7F7F7;\n" +
    "    border: 1px solid #CCC;\n" +
    "    border-right-color: #999;\n" +
    "    border-bottom-color: #999;\n" +
    "    border-bottom-left-radius: 4px;\n" +
    "    border-bottom-right-radius: 4px;\n" +
    "    border-top-color: #DADADA;\n" +
    "    color: #666;\n" +
    "    box-shadow:0 3px 8px rgba(50, 50, 50, 0.17);\n" +
    "  }\n" +
    "  </style>\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "  <!-- This file lives in public/500.html -->\n" +
    "  <div class=\"dialog\">\n" +
    "    <h1>We're sorry, but something went wrong.</h1>\n" +
    "  </div>\n" +
    "  <p>If you are the application owner check the logs for more information.</p>\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('/templates/_create_note.html',
    "<div class=\"create-note\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <h2 class='text-center'>\n" +
    "      <span class='calvin-klein thin'>CREATE A NOTE</span>\n" +
    "      <button type=\"button\" class=\"close\" ng-click=\"cancel()\">×</button>\n" +
    "    </h2>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "    <p class=\"lead\">\n" +
    "      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "      tempor incididunt ut labore et dolore magna aliqua.\n" +
    "    </p>\n" +
    "    <br>\n" +
    "    <form class=\"form-horizontal\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-2 control-label h3 thin\">NOTE: </label>\n" +
    "        <div class=\"col-sm-10\">\n" +
    "          <textarea\n" +
    "            class='form-control'\n" +
    "            placeholder=\"80 characters or less\"\n" +
    "            rows=\"4\"\n" +
    "          ></textarea>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <br>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-2 control-label h3 thin\">FROM: </label>\n" +
    "        <div class=\"col-sm-10\">\n" +
    "          <input type=\"text\" class=\"form-control\" placeholder=\"(optional)\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-primary\" ng-click=\"create()\">CREATE</button>\n" +
    "    <button class=\"btn btn-warning\" ng-click=\"cancel()\">CANCEL</button>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/_navbar.html',
    "<div class=\"navbar navbar-inverse\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-responsive-collapse\">\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <a class=\"navbar-brand\" href=\"/\">\n" +
    "        <span ng-non-bindable>\n" +
    "          The Noteblock\n" +
    "        </span>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div class=\"navbar-collapse collapse navbar-responsive-collapse\">\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <li>\n" +
    "          <a href=\"https://www.github.com/BitcoinMafia/\" target=\"_blank\">\n" +
    "            <i class=\"fa fa-code\"></i>\n" +
    "            <span>Source Code</span>\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li\n" +
    "          ng-class=\"{'active': global.isOnLink('/docs')}\">\n" +
    "          <a href=\"/how-it-works\">\n" +
    "            <i class=\"fa fa-info-circle\"></i>\n" +
    "            <span>How it Works</span>\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <button class=\"btn btn-warning\" ng-click=\"What.open()\">\n" +
    "            What is this?\n" +
    "          </button>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div><!-- /.nav-collapse -->\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/_what.html',
    "<div class=\"create-note\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <h2 class='text-center'>\n" +
    "      <span class='calvin-klein thin'>WHAT IS THIS?</span>\n" +
    "      <button type=\"button\" class=\"close\" ng-click=\"cancel()\">&times;</button>\n" +
    "    </h2>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "    <p class=\"lead\">\n" +
    "      <span class=\"h1\">Hello, </span>\n" +
    "      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "      tempor incididunt ut labore et dolore magna aliqua.\n" +
    "    </p>\n" +
    "    <br>\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"cancel()\">CLOSE</button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('/templates/confirm.html',
    "<div class=\"container\">\n" +
    "  <br><br><br>\n" +
    "  <blockquote>\n" +
    "    <div class=\"h1 thin text-center\">\n" +
    "      Seal Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "      tempor incididunt ut labore et dolore magna aliqua.\n" +
    "    </div>\n" +
    "  </blockquote>\n" +
    "  <br><br>\n" +
    "  <div class=\"col-md-10 col-md-offset-1\">\n" +
    "    <table class=\"table table-striped\">\n" +
    "      <tbody>\n" +
    "        <tr>\n" +
    "          <td>\n" +
    "            <span class=\"h2\"><strong>STATUS: </strong></span>\n" +
    "          </td>\n" +
    "          <td>\n" +
    "            <div class=\"h2\">\n" +
    "              <span class=\"label label-warning\">PENDING</span>\n" +
    "              <span class=\"label label-success dim\">RECEIVED</span>\n" +
    "            </div>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>\n" +
    "            <span class=\"h2\"><strong>ADDRESS: </strong></span>\n" +
    "          </td>\n" +
    "          <td>\n" +
    "            <div class=\"h2\">\n" +
    "              <textarea\n" +
    "                class=\"address thin\"\n" +
    "                spellcheck=\"false\"\n" +
    "                readonly\n" +
    "                selected>{{address}}</textarea>\n" +
    "            </div>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "    </table>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/how-it-works.html',
    "<h1 class='text-center thin'>\n" +
    "  How It Works\n" +
    "</h1>\n" +
    "<br>\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-8 col-md-offset-2\">\n" +
    "    <blockquote>\n" +
    "      <p class=\"lead\">\n" +
    "        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
    "        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
    "        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
    "      </p>\n" +
    "    </blockquote>\n" +
    "    <blockquote>\n" +
    "      <p class=\"lead\">\n" +
    "        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
    "        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
    "        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
    "      </p>\n" +
    "    </blockquote>\n" +
    "    <blockquote>\n" +
    "      <p class=\"lead\">\n" +
    "        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
    "        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
    "        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
    "      </p>\n" +
    "    </blockquote>\n" +
    "    <blockquote>\n" +
    "      <p class=\"lead\">\n" +
    "        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
    "        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
    "        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
    "      </p>\n" +
    "    </blockquote>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/landing.html',
    "<div class=\"centerpiece\">\n" +
    "  <div class=\"text-center\">\n" +
    "    <span class='h1 title-fancy text-center'>The Noteblock</span>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- <small>\n" +
    "    <em> Forever embed your love note in the Blockchain</em>\n" +
    "  </small> -->\n" +
    "\n" +
    "  <h1 class='text-center calvin-klein'>\n" +
    "    Roses will wither, but the Blockchain is Forever.\n" +
    "  </h1>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "  <div class=\"thick-line\"></div>\n" +
    "  <br>\n" +
    "  <tabset>\n" +
    "    <tab heading=\"LATEST NOTES\">\n" +
    "      <br>\n" +
    "      <div class=\"note\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-md-8\">\n" +
    "            <p class='lead text-center'>\n" +
    "              <a href=\"#\">\n" +
    "                \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.\"\n" +
    "              </a>\n" +
    "            </p>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-2\">\n" +
    "            <p class='username text-center'>\n" +
    "              <img src=\"https://identicoin.herokuapp.com/address/b\" height='16'>\n" +
    "              <strong> (ANON.)</strong>\n" +
    "            </p>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-2\">\n" +
    "            <p>\n" +
    "              <strong>\n" +
    "                <span class=\"label label-info label-lg\">0.01 BTC</span>\n" +
    "                DEDICATED\n" +
    "              </strong>\n" +
    "            </p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <!-- <div ng-include=\"'/templates/blockExplorer/_tx.html'\"></div> -->\n" +
    "    </tab>\n" +
    "    <tab heading=\"TOP NOTES\">\n" +
    "      <!-- <div ng-include=\"'/templates/blockExplorer/_tx.html'\"></div> -->\n" +
    "    </tab>\n" +
    "    <div class=\"pull-right\">\n" +
    "      <a class=\"btn btn-primary\" ng-click=\"Note.create()\">+ CREATE A NOTE</a>\n" +
    "    </div>\n" +
    "\n" +
    "  </tabset>\n" +
    "\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('/templates/notes.html',
    "<div class=\"centerpiece centerpiece-notes\">\n" +
    "  <h1 class='text-center calvin-klein'>\n" +
    "    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "    tempor incididunt ut labore et dolore magna aliqua. - ScottyLi\n" +
    "  </h1>\n" +
    "</div>\n" +
    "<BR>\n" +
    "<div class=\"container\">\n" +
    "  <div class=\"col-md-8 col-md-offset-2\">\n" +
    "    <div class=\"alert alert-dismissable alert-danger text-center\">\n" +
    "      <button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>\n" +
    "      <!-- <span class=\"h4\"> -->\n" +
    "        THIS NOTE HAS BEEN FOREVER EMBEDDED IN THE BLOCKCHAIN.\n" +
    "      <!-- </span> -->\n" +
    "    </div>\n" +
    "    <table class=\"table table-bordered table-striped table-note\">\n" +
    "      <tbody>\n" +
    "        <tr>\n" +
    "          <td>Username</td>\n" +
    "          <td>ScottyLi</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>Decoded Note</td>\n" +
    "          <td>\n" +
    "            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>Raw Note</td>\n" +
    "          <td>\n" +
    "            <a href=\"#\">\n" +
    "              mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo\n" +
    "            </a>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>Transaction Hash</td>\n" +
    "          <td>\n" +
    "            <a href=\"#\">\n" +
    "              6f9e9570881e781db8c137c84c111a138e4a022e6b2def5e2a1589a802fe25f3\n" +
    "            </a>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>Time Received</td>\n" +
    "          <td>2014-2-14 12:14 UTC</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>Magic Bytes</td>\n" +
    "          <td>0x98</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>BTC Dedicated</td>\n" +
    "          <td>0.001 BTC</td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "\n" +
    "    </table>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
