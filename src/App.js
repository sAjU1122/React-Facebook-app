import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="main">
    <div class="header">
        <h1>facebook</h1>
    </div>
    <div class="section12">
        <div class="header2">
            <h2>Login in to Facebook</h2>
        </div>
        <div class="input_field">
            <label for="number"></label>
            <input type="number" id="number" placeholder="Email address or phone number"></input>
            <br/>
            <br/>
        </div>
    </div>
    <div class="pass_field">
        <label for="pass"></label>
        <input type="password" id="pass" placeholder="Password"></input>
    </div>
    <div class="btn">
        <button><a href="">Login in</a></button>
    </div>
    <div class="section">
        <button class="btn_1">
            <a href="">Forgotten Password?</a>
        </button>
        <button class="btn_2">
            <a href="facebook_signup.html">Sign up For Facebook</a>
        </button>
    </div>
</div>
  );
}

export default App;
