<template>
    <div id="app">
        <div class="buttons">
            <button class="btn" v-shine="{ opacity: 0.2, time: 1, ease: 'linear' }">Button hover</button>
            <button class="btn blue" v-shine="{ opacity: 0.2, time: 1, ease: 'linear', event: 'click' }">Click me!</button>
        </div>
        <div class="card" v-shine="{ fromLeft: false, extraShine: true, opacity: 0.5, color: 'rgb(255, 253, 244)' }">
			<img class="card__image" src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
			<div class="card__content">
				 <h3 class="card__title">The Beach</h3>
				 <p class="card__description">A very shine place.</p>
			</div>
	    </div>
        <div class="card" v-shine="{ ease: 'linear', angle: 45, opacity: 0.5 }">
			<img class="card__image" src="https://edge.alluremedia.com.au/m/l/2017/06/CocaColaNoSugar_4.jpg"/>
			<div class="card__content">
				 <h3 class="card__title">Coke Cans</h3>
				 <p class="card__description">Are also very shiny.</p>
			</div>
	    </div>

        <!-- <div class="shine flat" v-shine></div> -->
        <div class="img" v-shine>
            <img  
                style="height: 100%; width: 100%;"
                src="https://images.homedepot-static.com/productImages/aa0611b5-401e-499a-aa01-6bc219d0adcb/svn/jeld-wen-picture-windows-thdjw141600016-64_1000.jpg" 
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="scss">
    $box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);

    html, body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        background: rgb(247, 241, 255);
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
    }

    .btn {
        height: 40px;
        margin-right: 20px;
        position: relative;
        background: rgb(55, 44, 119);
    	padding: 10px;
    	border-radius: 3px;
    	transition: all 0.2s ease;
        cursor: pointer;
        color: white;
        width: 200px;
        display: block;
        margin-bottom: 15px;
        
        &.blue {
            background: rgb(38, 60, 155);
        }

        &:active {
            border: 1px solid lightgrey;
            transform: translateY(-1px)
        }

        &:focus {
            outline: none;
        }

        &:hover {
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.2);
            transform: translateY(-3px)
        }
    }

    .img {
        height: 300px;
        width: 300px;
    }

    .card {
    	height: 400px;
    	width: 300px;
    	border-radius: 5px;
    	overflow: hidden;
    	display: block;
    	box-shadow: $box-shadow;
    	cursor: pointer;
    	transition: all 0.3s ease;
    	margin-right: 20px;
    	background: #fff;

    	&:hover {
    		transform: translateY(-1px);
    		box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.3);
    	}

    	&__image {
    		height: 100%;
    		width: 100%;
    		min-height: 250px;
    		max-height: 250px;
    		object-fit: cover;
    		object-position: 50% 0%;
    	}

    	&__content {
    		padding: 15px;
    		box-sizing: border-box;
    		font-family: "Roboto", sans-serif;
    	}

    	&__title {
    		margin-bottom: 15px;
    		font-weight: 700;
    	}
    }

</style>
