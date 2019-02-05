use: [
		{loader: 'style-loader',},
		{loader: 'css-loader',}, 
		{loader: 'postcss-loader', options: 
			{
				plugins: function () {
					return [
						require('precss'),
						require('autoprefixer')
					];
			}
		}
	}, 
	{loader: 'sass-loader'}
]