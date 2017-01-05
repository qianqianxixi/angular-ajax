// 提案详情数据绑定
    var app = angular.module('myApp',['ngSanitize']);
    app.config(function($provide){
        $provide.factory("transFormFactory",function(){
            return {
                transForm : function(obj){
                    var str = [];  
                    for(var p in obj){  
                      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));  
                    } 
                    return str.join("&");  
                }
            };
        });
    });
    
    app.controller("data",function($sce,$scope,$http,$q,transFormFactory){
        $scope.proposalDetail = function(proposal_id) {
            $scope.url = "AjaxTaInfo";
            $http({method:"GET",url:$scope.url,params:{id:proposal_id}}).success(function (data) {
            	console.log(data);
                $scope.anyou = data.list.anyou;
                $scope.content = data.list.content;
                $scope.date = data.list.date;
                $scope.filepaths = data.list.filepaths;
                $scope.id = data.list.id;
                $scope.is_open = data.list.is_open;
                $scope.jiciname = data.list.jiciname;
                $scope.jiebie = data.list.jiebie;
                $scope.tano = data.list.tano;
                $scope.tatype = data.list.tatype;
                $scope.tauid = data.list.tauid;
                console.log($scope.content);
            });
            $('#proposal_detail').modal('show');
        };

        $scope.opinionDetail = function(opinion_id) {
            $scope.url = "AjaxMyInfo";
            $http({method:"GET",url:$scope.url,params:{id:opinion_id}}).success(function (data) {
                console.log(data);
                $scope.content = data.list;
                $scope.filepaths = $scope.content.filepaths.split(',').slice(1);
                console.log($scope.filepaths);
            });
            $('#opinionDetailModal').modal('show');
        };
        $scope.opinionReplay = function(opinion_id) {
            $scope.url = "AjaxMyInfo";
            $http({method:"GET",url:$scope.url,params:{id:opinion_id}}).success(function (data) {
                console.log(data);
                $scope.content = data.list;
                $scope.filepaths = $scope.content.filepaths.split(',').slice(1);
                console.log($scope.filepaths);
            });
            $('.replay-example-modal-sm').modal('show');
        };

        $scope.replay = function(taid,cbuid) {
            // $('#render').removeClass('hide');
            $('.select').addClass('hide');
            $scope.url = "AjaxGetAllDf";
            $http({method:"GET",url:$scope.url,params:{taid:taid,cbuid:cbuid}}).success(function (data) {
                console.log(data);
                $scope.anyou = data.list.anyou;
                $scope.content = data.list.content;
                $scope.date = data.list.date;
                $scope.filepaths = data.list.filepaths;
                $scope.id = data.list.id;
                $scope.is_open = data.list.is_open;
                $scope.uname = data.list.uname;
                $scope.jiebie = data.list.jiebie;
                $scope.tano = data.list.tano;
                $scope.tatype = data.list.tatype;
                $scope.tauid = data.list.tauid;
                $scope.taid = data.list.taid;
                $scope.company = data.list.tcl;
                // console.log(data.list.tcl);
                
            });
            $('.replay-example-modal-sm').modal('show'); 

        };


        $scope.select = function(taid,cbuid) {
            $('.render').addClass('hide');
            $('.select').removeClass('hide');
            $scope.url = "AjaxGetAllDf";
            $http({method:"GET",url:$scope.url,params:{taid:taid,cbuid:cbuid}}).success(function (data) {
                console.log(data);
                $scope.anyou = data.list.anyou;
                $scope.content = data.list.content;
                $scope.date = data.list.date;
                $scope.filepaths = data.list.filepaths;
                $scope.id = data.list.id;
                $scope.is_open = data.list.is_open;
                $scope.uname = data.list.uname;
                $scope.jiebie = data.list.jiebie;
                $scope.tano = data.list.tano;
                $scope.tatype = data.list.tatype;
                $scope.tauid = data.list.tauid;
                $scope.companys = data.list.tcl;
                // console.log(data.list.tcl);
                
            });
            $('.replay-example-modal-sm').modal('show'); 

        };

    });