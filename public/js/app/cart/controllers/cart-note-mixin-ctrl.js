/**
 * [y] hybris Platform
 *
 * Copyright (c) 2000-2016 hybris AG
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of hybris
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with hybris.
 */

'use strict';

angular.module('ds.cart')
    /** This controller manages the interactions of the cart view. The controller is listening to the 'cart:udpated' event
     * and will refresh the scope's cart instance when the event is received. */
    .controller('CartNoteMixinCtrl', ['$scope', 'CartSvc', 'CartNoteMixinSvc',
        function($scope, CartSvc, CartNoteMixinSvc) {

            // NOTE mixin
            $scope.note = {
                noteCollapsed: true,
                oldContent: '',
                content: '',
                collapseNote: function() {
                    this.noteCollapsed = true;
                },
                expandNote: function() {
                    this.noteCollapsed = false;
                },
                submit: function(item) {
                    CartNoteMixinSvc.updateNote(item, this.content)
                        .finally(function() {
                            this.collapseNote();
                        });
                }
            };
        }
    ]);