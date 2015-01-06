<h1>Momentum.build Petition module for Angular</h1>

<img src="preview.png" />

<h3>Use (Simple):</h3>

<p>1. bower install momentum-petition --save</p>
<p>2. Add angular, ngLodash and petition.js as scripts in your html</p>
```
<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/ng-lodash/build/ng-lodash.min.js"></script>
<script src="bower_components/dist/petition.js"></script>
```

<p>3. Add 'momentum.petition' as dependancy to app module.</p>
```
angular.module('actionExample', ['ngAnimate', 'momentum.actions', 'mgcrea.ngStrap', 'ngLodash'])
```

<p>4. call directive with campaign and action id's.</p>
```
<example-feed campaign-id="48" action-id="42" action="petition" />
<example-form campaign-id="49" action-id="41" action="petition" />
```

<h3>Use (Custom):</h3>
<p>Custom uncompiled example located in 'src/example'. Uses gulp and jade and compiles to 'example/' folder.</p>

```
<actions-feed campaign-id="48" action-id="42" action="petition">
  <div data-ng-repeat="a in Feed.actions | orderBy:'-createdAt'" class="actionItem">
    <p><b>{{ a.first_name }} said</b> {{ a.message}}<small class="clearfix">at {{ a.createdAt | date : 'medium' }}</small></p>
  </div>
</actions-feed>
```

```
<actions-form campaign-id="48" action-id="42" action="petition"> 
  <form id="actionForm" data-ng-submit="Form.create()">
    <div class="form-group">
      <input type="text" data-ng-model="Form.newAction.first_name" data-ng-required="true" placeholder="First Name" class="form-control">
    </div>
    <div class="form-group">
      <textarea data-ng-model="Form.newAction.message" data-ng-required="true" placeholder="Message" class="form-control"></textarea>
    </div>
    <button class="btn btn-success btn-block btn-lg">Sign Action</button>
  </form>
</actions-form>
```

