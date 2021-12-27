import { h, FunctionalComponent } from "preact";

const SignIn: FunctionalComponent = () => {
  return (
    <form action="" method="get" class="form-example">
      <div class="form-example">
        <label for="email">Enter your email: </label>
        <input type="email" name="email" id="email" required />
      </div>
      <div class="form-example">
        <label for="name">Enter your password: </label>
        <input type="text" name="name" id="name" required />
      </div>
      <div class="form-example">
        <input type="submit" value="Sign In" />
      </div>
    </form>
  );
};

export default SignIn;
