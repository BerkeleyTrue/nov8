import { Component } from 'solid-js';
import { createRoute } from '../../lib/router5/createRoute';
import { RLink } from '../../lib/router5/Link';

export const Auth: Component = () => {
  const useRoute = createRoute();
  const isSignup = () => useRoute()?.route?.name === 'signup';

  return (
    <div
      id='auth-layout'
      class='flex h-full w-full flex-col items-center justify-center'
    >
      <main
        id='card'
        class='bg-darker-400 flex h-96 w-full max-w-md flex-col justify-between rounded-lg px-12 py-8 shadow-lg'
      >
        <header>
          <h1 class='text-2xl font-semibold leading-4 tracking-widest text-green-200'>
            {isSignup() ? 'Register' : 'Login'}
          </h1>
        </header>
        <div>
          <div class='flex h-full flex-wrap items-center justify-center text-gray-800'>
            <div class='md:w-8/12 lg:ml-20 lg:w-5/12'>
              <form>
                <div class='mb-6'>
                  <input
                    type='text'
                    class='form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none'
                    placeholder='Email address'
                  />
                </div>

                <button
                  type='submit'
                  class='inline-block w-full rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  {isSignup() ? 'Register' : 'Login'}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class='flex items-center justify-between'>
          <RLink routeName='signup' class='text-indigo-700'>
            Register
          </RLink>
          <RLink routeName='signup' class='text-indigo-700'>
            Password reset
          </RLink>
        </div>
      </main>
    </div>
  );
};
