const Mutations = {
    createDog(partent, args, context, info){
        global.dogs = global.dogs || [];
        // Create a dog!
        const newDog = { name: args.name };
        global.dogs.push(newDog);
        return newDog;
    },
};

module.exports = Mutations;
