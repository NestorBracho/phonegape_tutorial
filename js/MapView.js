/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var Map = function(){

    this.render = function() {
        this.el.html(Map.template());
        navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
        return this;
    };

    this.initialize = function() {
        this.el = $('<div/>');
        this.el.on('click', '.add-location-btn', this.addLocation);
        this.el.on('click', '.add-contact-btn', this.addToContacts);
        this.el.on('click', '.change-pic-btn', this.changePicture);
    };

    this.onSuccess = function(position){

        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;
        var latLong = new google.maps.LatLng(latitude, longitude);


        var mapOptions = {

            center: latLong,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP

        };

        var map = new google.maps.Map(document.getElementById("geolocation"), mapOptions);

    };

    this.onError = function(error){

        alert('code: ' + error.code + '\nmessage: ' + error.message + '\n');

    };

    this.initialize();

};

Map.template = Handlebars.compile($("#map-tpl").html());

