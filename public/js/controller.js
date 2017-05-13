angular.module('app.controllers', [])


.controller('homePageCtrl', ['$scope',
	// a verbose line seperator between the top construction section and the function for the controller below

 function($scope) {

   

}])


.controller('signupPageCtrl', ['$scope','$timeout','$state','$window',
	// a verbose line seperator between the top construction section and the function for the controller below

 function($scope,$timeout,$state,$window) {

    $scope.signed = {password:"",matching:""};
    $scope.matching = false;
    $scope.info = {companyName:"",
                    address:"",
                    address2:"",
                    city:"",
                    state:"",
                    zip:"",
                    firstname:"",
                    lastname:"",
                    title:"",
                    email:"",
                    phonenumber:"",
                    industry:"Beauty"
                };

    $scope.errorpopup = "";
    $scope.thankyou = false;
    

    /*$scope.checkMatch = function()
    {
        if($scope.signed.password == "" || $scope.signed.password == " ")
        {
            $scope.matching = false;
        }
        else
        {
            $scope.matching = angular.equals($scope.signed.password, $scope.signed.matching);
        }
        
    };*/

    //keep track of selected tab
            $scope.tabSelected = "companyInfo";
            $scope.selectCompanyInformation = function () {
                $scope.tabSelected = "companyInfo";

                document.getElementById("companyInfo").className = "eoko-button-nav-active";
                document.getElementById("circle1").className = "eoko-element-signup-phase-active";

                document.getElementById("companyContact").className = "eoko-button-nav-nonactive";
                document.getElementById("circle2").className = "eoko-element-signup-phase-nonactive";

                document.getElementById("companyAccount").className = "eoko-button-nav-nonactive";
                document.getElementById("circle3").className = "eoko-element-signup-phase-nonactive";
            }

            $scope.selectCompanyContact = function () {
                if (checkValidInputCompanyInfo()) {
                    $scope.tabSelected = "companyContact";

                    document.getElementById("companyInfo").className = "eoko-button-nav-nonactive";
                    document.getElementById("circle1").className = "eoko-element-signup-phase-nonactive";

                    document.getElementById("companyContact").className = "eoko-button-nav-active";
                    document.getElementById("circle2").className = "eoko-element-signup-phase-active";

                    document.getElementById("companyAccount").className = "eoko-button-nav-nonactive";
                    document.getElementById("circle3").className = "eoko-element-signup-phase-nonactive";
                } else {
                    $scope.errorpopup = "Please enter Company Information First";
                }

            }

            $scope.selectCompanyAccount = function () {
                if (checkValidInputCompanyInfo() && checkValidInputContact()) {
                    $scope.tabSelected = "companyAccount";

                    document.getElementById("companyInfo").className = "eoko-button-nav-nonactive";
                    document.getElementById("circle1").className = "eoko-element-signup-phase-nonactive";

                    document.getElementById("companyContact").className = "eoko-button-nav-nonactive";
                    document.getElementById("circle2").className = "eoko-element-signup-phase-nonactive";

                    document.getElementById("companyAccount").className = "eoko-button-nav-active";
                    document.getElementById("circle3").className = "eoko-element-signup-phase-active";
                }
                else {
                    $scope.errorpopup = "Please enter Company Information and/or Company Contact First";
                }
            }


            //Company Information Tab form
            $scope.goToCompanyContact = function () {
                if (checkValidInputCompanyInfo())
                    $scope.selectCompanyContact();
            }
            function checkValidInputCompanyInfo() {
                if ($scope.info.companyName === "" || $scope.info.companyName === " ") {
                    $scope.errorpopup = "Please enter the Company Name";
                    return false;
                } else if ($scope.info.address === "" || $scope.info.address === " ") {
                    $scope.errorpopup = "Please enter the Company Address";
                    return false;
                } else if ($scope.info.city === "" || $scope.info.city === " ") {
                    $scope.errorpopup = "Please enter the City";
                    return false;
                } else if ($scope.info.zip === "" || $scope.info.zip === " ") {
                    $scope.errorpopup = "Please enter the Zip";
                    return false;
                } else if ($scope.info.state === "" || $scope.info.state === " ") {
                    $scope.errorpopup = "Please enter the State";
                    return false;
                } else if ($scope.info.password === "" || $scope.info.password === " ") {
                    $scope.errorpopup = "Please enter your Password";
                    return false;
                } else {
                    return true;
                }
            }


            //Company Contact Tab form
            $scope.addedAnotherContact = false;
            $scope.contactSelected = 'primaryContact';
            $scope.selectPrimaryContact = function () {
                $scope.contactSelected = 'primaryContact';
                document.getElementById("primaryContact").className = "eoko-label-header-2-selected";
                document.getElementById("secondaryContact").className = "eoko-label-header-2-not-selected";
            }
            $scope.selectSecondaryContact = function () {
                if ($scope.addedAnotherContact) {
                    $scope.errorpopup = "";
                    $scope.contactSelected = 'secondaryContact';
                    document.getElementById("primaryContact").className = "eoko-label-header-2-not-selected";
                    document.getElementById("secondaryContact").className = "eoko-label-header-2-selected";
                } else {
                    $scope.errorpopup = "Please enter your Primary Contact first";
                }
            }
            $scope.addSecondaryContact = function () {
                if (checkValidInputContact()) {
                    $scope.errorpopup = "";
                    $scope.contactSelected = 'secondaryContact';
                    document.getElementById("primaryContact").className = "eoko-label-header-2-not-selected";
                    document.getElementById("secondaryContact").className = "eoko-label-header-2-selected";
                    if ($scope.info.secondaryfirstname !== "" ||
                        $scope.info.secondaryfirstname !== " " ||
                        $scope.info.secondarylastname !== "" ||
                        $scope.info.secondarylastname !== " " ||
                        $scope.info.secondaryemail !== "" ||
                        $scope.info.secondaryemail !== " " ||
                        $scope.info.secondaryphonenumber !== "" ||
                        $scope.info.secondaryphonenumber !== " ") {
                        $scope.addedAnotherContact = true;
                    }
                } else {
                    $scope.errorpopup = "Please enter your Primary Contact first";
                }
            }
            $scope.goToCompanyAccount = function () {
                if (checkValidInputContact())
                    $scope.selectCompanyAccount();
            }
            function checkValidInputContact() {
                if ($scope.info.firstname === "" || $scope.info.firstname === " ") {
                    $window.scrollTo(0, 0);
                    $scope.errorpopup = "Please enter your First Name";
                    return false;
                } else if ($scope.info.lastname === "" || $scope.info.lastname === " ") {
                    $window.scrollTo(0, 0);
                    $scope.errorpopup = "Please enter your Last Name";
                    return false;
                } else if ($scope.info.email === "" || $scope.info.email === " ") {
                    $window.scrollTo(0, 0);
                    $scope.errorpopup = "Please enter your email";
                    return false;
                } else if ($scope.info.phonenumber === "" || $scope.info.phonenumber === " ") {
                    $window.scrollTo(0, 0);
                    $scope.errorpopup = "Please enter your Contact Number";
                    return false;
                } else {
                    return true;
                }
            }

            //check weather Password nd Confirm Password matches
            $scope.checkMatch = function () {
                if ($scope.signed.password === "" || $scope.signed.password === " ") {
                    $scope.matching = false;
                    document.getElementById("matching_indicator").className = "eoko-text-field-not-matching-password";
                    document.getElementById("matching_indicator2").className = "eoko-text-field-not-matching-password";
                } else if ($scope.signed.matching === "" || $scope.signed.matching === " ") {
                    $scope.matching = false;
                    document.getElementById("matching_indicator").className = "eoko-text-field-not-matching-password";
                    document.getElementById("matching_indicator2").className = "eoko-text-field-not-matching-password";
                } else {
                    if ($scope.signed.password === $scope.signed.matching) {
                        $scope.matching = true;
                        document.getElementById("matching_indicator").className = "eoko-text-field-matching-password";
                        document.getElementById("matching_indicator2").className = "eoko-text-field-matching-password";

                    } else {
                        $scope.matching = false;
                        document.getElementById("matching_indicator").className = "eoko-text-field-not-matching-password";
                        document.getElementById("matching_indicator2").className = "eoko-text-field-not-matching-password";
                    }
                }
            };


    $scope.submitInfo = function()
    {
        console.log("begin submit");
        $window.scrollTo(0, 0);
    	if($scope.info.firstname == "" || $scope.info.firstname == " ")
    	{
    		$scope.errorpopup = "Please enter your First Name";
    		return;
    	}
        if($scope.info.lastname == "" || $scope.info.lastname == " ")
        {
            $scope.errorpopup = "Please enter your Last Name";
            return;
        }
        /*if($scope.info.industry == "" || $scope.info.industry == " ")
        {
            $scope.errorpopup = "Please enter your Industry/Sector";
            return;
        }*/
    	if($scope.info.email == "" || $scope.info.email == " ")
    	{
    		$scope.errorpopup = "Please enter your email";
    		return;
    	}
        if($scope.info.phonenumber == "" || $scope.info.phonenumber == " ")
        {
            $scope.errorpopup = "Please enter your Contact Number";
            return;
        }
        if($scope.info.companyName == "" || $scope.info.companyName == " ")
        {
            $scope.errorpopup = "Please enter the Company Name";
            return;
        }
        if($scope.info.address == "" || $scope.info.address == " ")
        {
            $scope.errorpopup = "Please enter the Company Address";
            return;
        }
        if($scope.info.city == "" || $scope.info.city == " ")
        {
            $scope.errorpopup = "Please enter the City";
            return;
        }
        if($scope.info.zip == "" || $scope.info.zip == " ")
        {
            $scope.errorpopup = "Please enter the Zip";
            return;
        }
        if($scope.info.state == "" || $scope.info.state == " ")
        {
            $scope.errorpopup = "Please enter the State";
            return;
        }
        if($scope.info.password == "" || $scope.info.password == " ")
        {
            $scope.errorpopup = "Please enter your Password";
            return;
        }


    	console.log("button clicked, submitting");
    	try{
            console.log("begin try");
            firebase.auth().createUserWithEmailAndPassword($scope.info.email, $scope.signed.password)
                .then(function(success) {
                    console.log("auth finished");
                    var usr = firebase.auth().currentUser;
                    usr.updateProfile({
                        displayName: $scope.info.companyName,
                        photoURL: $scope.info.industry
                    })

                    firebase.database().ref('CompanyInfo').child($scope.info.companyName).set($scope.info).then(function(success)
                    {
                        console.log("entry data to database");
                        console.log("thanks!");
                        $scope.thankyou = true;
                        $timeout(function () {$scope.$apply();});
                        $timeout(function() {$scope.thankyou = false;$state.go('login');}, 6000);

                    },function(fail)
                    {
                        $scope.errorpopup = "email was typed incorrectly";
                        console.log("error:",fail);
                        return;

                    });

                },function(fail)
                {
                    console.log("auth failed");
                    if(fail.code == "auth/weak-password")
                    {
                        $scope.errorpopup = "Password should be at least 6 characters";
                        return;
                    }
                });
	    	
    	}catch(err)
    	{
            console.log("try catch failed");
    		$scope.errorpopup = "email was typed incorrectly";
	    		//console.log("error:",fail);
	    		return;
    	}
    };

}])


.controller('loginPageCtrl', ['$scope','$state',
    // a verbose line seperator between the top construction section and the function for the controller below

 function($scope,$state) {

    
$scope.errorpopup = "";
$scope.info = {email:"",password:""};


$scope.LogUser = function()
{
    if($scope.info.email == "" || $scope.info.email == " ")
        {
            $scope.errorpopup = "Please enter your email";
            return;
        }
    if($scope.info.password == "" || $scope.info.password == " ")
        {
            $scope.errorpopup = "Please enter your Password";
            return;
        }

        console.log("logging in");
        firebase.auth().signInWithEmailAndPassword($scope.info.email, $scope.info.password).
        then(function(resolve) {
                    console.log("logged in!");
                        $state.go('portal');
                },
                function(error) {
                    console.log(error);
                   $scope.errorpopup = error.message;
                    return; 

                });

};

}])



.controller('feedbackCtrl', ['$scope','$window','$timeout',
    // a verbose line seperator between the top construction section and the function for the controller below

 function($scope,$window,$timeout) {

 $scope.user = {description:""};
 $scope.thankyou = false;

 $scope.submitFeeback = function()
 {
    if($scope.user.description == "" || $scope.user.description == " ")
        {
            $scope.errorpopup = "Please enter some feedback";
            return;
        }

    firebase.database().ref("Feedback").push($scope.user.description).then(function(success)
    {
        $window.scrollTo(0, 0);
        $scope.thankyou = true;
        $timeout(function () {$scope.$apply();});
        $timeout(function() {$scope.thankyou = false;$window.history.back();}, 3000);
    });
    
 };

}])


.controller('constructionCtrl', ['$scope',
    // a verbose line seperator between the top construction section and the function for the controller below

 function($scope) {


}])










.controller('portalPageCtrl', ['$scope','$firebaseArray','$timeout','$window',
    // a verbose line seperator between the top construction section and the function for the controller below

 function($scope,$firebaseArray,$timeout,$window) {

firebase.auth().onAuthStateChanged(function (user) {
var usr = firebase.auth().currentUser;

var ref = firebase.database().ref("Categories").child(usr.photoURL).child(usr.displayName);
$scope.list = $firebaseArray(ref);
$scope.list.$loaded()
  .then(function(x) {

    /*for(var i in x)
    {
        x[i].fromTime = new Date(x[i].fromTime);
        x[i].toTime = new Date(x[i].toTime);
    }*/

    console.log($scope.list);
    
  })
  .catch(function(error) {
    console.log("Error:", error);
  });


var res = firebase.database().ref("CompanyInfo").child(usr.displayName);
$scope.account = $firebaseArray(res);
$scope.account.$loaded()
  .then(function(x) {
    console.log($scope.account);
    
  })
  .catch(function(error) {
    console.log("Error:", error);
  });

});

$scope.newImage = "";
$scope.selection = {tab:"Manage"};
$scope.errorpopup = "";


$scope.selector = function(num)
{
    switch (num) {
    case 0:
        $scope.selection.tab = 'Manage';
        break;
    case 1:
        $scope.selection.tab = 'Billing';
        break;
    case 2:
        $scope.selection.tab = 'Account Info';
        }
        console.log($scope.selection.tab);
};

function b64toBlob(b64Data, contentType, sliceSize) { //blobs galore
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          var slice = byteCharacters.slice(offset, offset + sliceSize);

          var byteNumbers = new Array(slice.length);
          for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }

          var byteArray = new Uint8Array(byteNumbers);

          byteArrays.push(byteArray);
        }

        var blob = new Blob(byteArrays, {
          type: contentType
        });
        return blob;
      }

//var contentType = 'image/jpeg';
//var blob = b64toBlob(imageData, contentType);
        
$scope.fromTimeString = function(number,index)
{
    $scope.list[index].fromTime = number.toTimeString().substring(0,8);
    $scope.list.$save(index); 
};

$scope.toTimeString = function(number,index)
{
    $scope.list[index].toTime = number.toTimeString().substring(0,8);
    $scope.list.$save(index);    
};


$scope.addCoupon = function()
{
    console.log("adding new coupon");

    $scope.list.$add({
        image: "https://firebasestorage.googleapis.com/v0/b/mycity-dfcc2.appspot.com/o/couponCut.png?alt=media&token=5a85d6d4-4233-477b-87dd-ce03f15eb711",
        title:"",
        description:"",
        code:"",
        edit:'true',
        percent:"",
        tag:"",
        toTime: "",
        fromTime: ""
    }).then(function(ref) {
      console.log("new coupon added.")
    });
};


$scope.setDone = function(index)
{
    
   
    if($scope.list[index].tag == "" || $scope.list[index].tag == " ")
    {
      $scope.errorpopup = "Category tag must be filled out.";
    return;
    }
    else if($scope.list[index].fromTime == "" || $scope.list[index].fromTime == " ")
    {
      $scope.errorpopup = "From time must be filled out.";
    return;
    }
    else if($scope.list[index].toTime == "" || $scope.list[index].toTime == " ")
    {
      $scope.errorpopup = "To time must be filled out.";
    return;
    }
    else if($scope.list[index].title == "" || $scope.list[index].title == " ")
    {
      $scope.errorpopup = "The title must be filled out.";
    return;
    }
    else if($scope.list[index].description == "" || $scope.list[index].description == " ")
    {
      $scope.errorpopup = "The description must be filled out.";
    return;
    }
    else if($scope.list[index].code == "" || $scope.list[index].code == " ")
    {
      $scope.errorpopup = "The code must be filled out.";
    return;
    }
    else
    {
       $scope.list[index].edit = 'false';
        $scope.list.$save(index).then(function(ref)
        {
            console.log("finished editing list item ", index);
             $scope.errorpopup = "";
        }); 
    }
    
    
};

$scope.setEdit = function(index)
{
    $scope.list[index].edit = 'true';
    $scope.list.$save(index).then(function(ref)
    {
        console.log("editing list item ", index);
    });
};


$scope.removeItem = function(index)
{
    $scope.list.$remove(index).then(function(ref) {
    console.log("removed list item");
});
};



}])

