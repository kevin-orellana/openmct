/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2018, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

define([
        'text!./res/indicator-template.html'
    ], function (
        indicatorTemplate
    ) {

        var DEFAULT_ICON_CLASS = 'icon-info';

        function SimpleIndicator(openmct) {
            this.openmct = openmct;
            this.textValue = 'New Indicator';
            this.descriptionValue = 'A simple indicator';
            this.iconClassValue = DEFAULT_ICON_CLASS;
            this.statusClassValue = '';

            this.element = document.createElement('div');
            this.element.className = 'status-block-holder';

            defaultDisplayFunction.call(this);
        }

        SimpleIndicator.prototype.text = function (text) {
            if (text !== undefined && text !== this.textValue) {
                this.textValue = text;
                defaultDisplayFunction.call(this);
            }

            return this.textValue;
        }

        SimpleIndicator.prototype.description = function (description) {
            if (description !== undefined && description !== this.descriptionValue) {
                this.descriptionValue = description;
                defaultDisplayFunction.call(this);
            }

            return this.descriptionValue;
        }

        SimpleIndicator.prototype.iconClass = function (iconClass) {
            if (iconClass !== undefined && iconClass !== this.iconClassValue) {
                this.iconClassValue = iconClass;
                defaultDisplayFunction.call(this);
            }

            return this.iconClassValue;
        }

        SimpleIndicator.prototype.statusClass = function (statusClass) {
            if (statusClass !== undefined && statusClass !== this.statusClassValue) {
                this.statusClassValue = statusClass;
                defaultDisplayFunction.call(this);
            }

            return this.statusClassValue;
        }

        function hideOrShowText(text) {
            if (text && text.length > 0) {
                return '';
            } else {
                return 'hidden';
            }
        }

        function defaultDisplayFunction() {
            var html = indicatorTemplate
                .replace('{{indicator.text}}', this.text())
                .replace('{{indicator.iconClass}}', this.iconClass())
                .replace('{{indicator.statusClass}}', this.statusClass())
                .replace('{{indicator.description}}', this.description())
                .replace('{{hideOrShowText}}', hideOrShowText(this.text()));

            this.element.innerHTML = html;
            
            return this.element;
        }

        return SimpleIndicator;
});