angular.module("actionExample").run(["$templateCache", function($templateCache) {$templateCache.put("base-petition.html","<div id=\"petition\"><header><h1>Petition Demo Title</h1></header><article><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><hr/><actions-feed campaign-id=\"48\" action-id=\"42\" action=\"petition\"><div data-ng-repeat=\"a in Feed.actions | orderBy:\'-createdAt\'\" class=\"actionItem\"><p><b>{{ a.first_name }} said</b> {{ a.message}}<small class=\"clearfix\">at {{ a.createdAt | date : \'medium\' }}</small></p></div></actions-feed>\n</article><aside><actions-form campaign-id=\"48\" action-id=\"42\" action=\"petition\"> <h4>Enter your details to sign the petition now!</h4><hr/><form id=\"actionForm\" data-ng-submit=\"Form.create()\"><input type=\"text\" data-ng-model=\"Form.newAction.first_name\" data-ng-required=\"true\" placeholder=\"First Name\"/><input type=\"text\" data-ng-model=\"Form.newAction.last_name\" data-ng-required=\"true\" placeholder=\"Last Name\"/><input type=\"email\" data-ng-model=\"Form.newAction.email\" data-ng-required=\"true\" placeholder=\"Email\"/><input type=\"number\" data-ng-model=\"Form.newAction.postcode\" data-ng-required=\"true\" placeholder=\"Postcode\"/><textarea data-ng-model=\"Form.newAction.message\" data-ng-required=\"true\" placeholder=\"Leave them a message!\"></textarea><input type=\"hidden\" data-ng-model=\"Form.newAction.voted\" data-ng-value=\"true\"/><button>Vote Yes!</button></form></actions-form></aside></div>");}]);