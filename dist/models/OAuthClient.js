"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
var OAuthClientStatus;
(function (OAuthClientStatus) {
    OAuthClientStatus["ACTIVE"] = "active";
    OAuthClientStatus["INACTIVE"] = "inactive";
})(OAuthClientStatus = exports.OAuthClientStatus || (exports.OAuthClientStatus = {}));
class OAuthClient extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.clientId = data.clientId;
        this.clientSecret = data.clientSecret;
        this.platform = data.platform;
        this.status = data.status;
    }
}
exports.default = OAuthClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT0F1dGhDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvbW9kZWxzL09BdXRoQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0NBQXFEO0FBRXJELElBQVksaUJBR1g7QUFIRCxXQUFZLGlCQUFpQjtJQUMzQixzQ0FBaUIsQ0FBQTtJQUNqQiwwQ0FBcUIsQ0FBQTtBQUN2QixDQUFDLEVBSFcsaUJBQWlCLEdBQWpCLHlCQUFpQixLQUFqQix5QkFBaUIsUUFHNUI7QUFTRCxpQkFBaUMsU0FBUSxnQkFBUztJQU1oRCxZQUFZLElBQXVCO1FBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUFiRCw4QkFhQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSAnLi4vYmFzZSc7XG5cbmV4cG9ydCBlbnVtIE9BdXRoQ2xpZW50U3RhdHVzIHtcbiAgQUNUSVZFID0gJ2FjdGl2ZScsXG4gIElOQUNUSVZFID0gJ2luYWN0aXZlJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPQXV0aENsaWVudFNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XG4gIGNsaWVudElkOiBzdHJpbmc7XG4gIGNsaWVudFNlY3JldD86IHN0cmluZztcbiAgcGxhdGZvcm06IHN0cmluZztcbiAgc3RhdHVzOiBPQXV0aENsaWVudFN0YXR1cztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT0F1dGhDbGllbnQgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBPQXV0aENsaWVudFNjaGVtYSB7XG4gIGNsaWVudElkOiBzdHJpbmc7XG4gIGNsaWVudFNlY3JldD86IHN0cmluZztcbiAgcGxhdGZvcm06IHN0cmluZztcbiAgc3RhdHVzOiBPQXV0aENsaWVudFN0YXR1cztcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBPQXV0aENsaWVudFNjaGVtYSkge1xuICAgIHN1cGVyKGRhdGEpO1xuICAgIHRoaXMuY2xpZW50SWQgPSBkYXRhLmNsaWVudElkO1xuICAgIHRoaXMuY2xpZW50U2VjcmV0ID0gZGF0YS5jbGllbnRTZWNyZXQ7XG4gICAgdGhpcy5wbGF0Zm9ybSA9IGRhdGEucGxhdGZvcm07XG4gICAgdGhpcy5zdGF0dXMgPSBkYXRhLnN0YXR1cztcbiAgfVxufVxuIl19