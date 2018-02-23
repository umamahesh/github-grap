import axios from 'axios';

export default {
  fetchPopularApi: function(language) {
  	var url = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+language+'&sort=stars&type=Repositories');
  	
  	return axios.get(url)
  	.then( function( response ) {
      return response.data.items;
  	});
  } 
}