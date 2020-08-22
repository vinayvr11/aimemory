import { Injectable , OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserModel } from '../../models/user-model/user-model.model';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  constructor(
    private userModel: UserModel,
    private http: HttpClient,
  ) {}

    public getUserData() {
      console.log(this.userModel.loginModel.email);
    }

    public signUp(signUpModel) {


      return this.http.post(environment.apiurl + '/email', this.userModel.signUpModel);

    }

    public signIn(signInModel) {
      return this.http.post(environment.apiurl + '/login', this.userModel.loginModel);
    }

    public getPlans(category) {
      return this.http.get(environment.apiurl + '/getPlan' + '/' + category);
    }

    public createPlan(paymentBody) {
      return this.http.post(environment.apiurl + '/createPayment', paymentBody);
    }

    public myChatBotData(companyId) {
      return this.http.post(environment.apiurl + '/myChatBot', {company_id: companyId});
    }

    public integrateBot(integrateModel) {
      return this.http.post(environment.apiurl + '/integrateBot', integrateModel);
    }

    public getChatHistory(user) {
      return this.http.post(environment.apiurl + '/history/' + user.project_id, user);
    }
}
