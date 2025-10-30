---
layout: page
title: Revisiting AlexNet with Modern Optimization
description: Achieving 95.7% accuracy on CIF-AR-10 by updating a classic CNN architecture.
img: assets/img/opalexnet.png
importance: 1
related_publications: true
---

By Metanthropic Labs, [Ekjot Singh](https://www.github.com/ekjotsinghmakhija)

This project revisits the classic 2012 AlexNet, a foundational deep convolutional neural network, and adapts it for the CIFAR-10 dataset[cite: 1, 2]. The primary goal was to explore how this pioneering architecture performs when enhanced with a suite of modern optimization and regularization techniques developed over the last decade[cite: 20, 25].

By integrating contemporary best practices, we demonstrate the enduring relevance and power of the original design[cite: 23]. The modernized network, which retains the core five convolutional and three fully-connected layers, achieved an impressive **95.7% accuracy** on the CIFAR-10 test set[cite: 3, 141].

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/figure2_image_filename.png" title="Modernized AlexNet Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/reluvstanhplot.png" title="ReLU vs. Tanh Training Speed" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left, the modernized AlexNet architecture for CIFAR-10, featuring Batch Normalization[cite: 86]. On the right, a comparison showing how ReLU activation functions dramatically accelerate training compared to traditional tanh units[cite: 45].
</div>

### Key Modernizations

Several key upgrades were instrumental in achieving high performance and training stability. We replaced the original **Local Response Normalization** with **Batch Normalization** to accelerate training and improve generalization[cite: 67, 69]. The original SGD-based learning rule was substituted with the more efficient **Adam optimizer**[cite: 126].

To combat the significant risk of overfitting on the smaller CIFAR-10 dataset, we employed a combination of techniques[cite: 100]. **On-the-fly data augmentation** (random flips, rotations, and zooms) artificially enlarged the dataset, while the **"dropout"** method was retained in the fully-connected layers to prevent complex co-adaptations between neurons[cite: 103, 108, 113, 118].

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/figure3_kernels.png" title="Learned Kernels" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The 96 convolutional kernels learned by the first layer of the original AlexNet, which specialize in detecting features like edges, colors, and textures[cite: 138, 148].
</div>

To ensure reproducibility and facilitate further research, the complete implementation and final trained model are publicly available.

* **📄 Paper (PDF):** [Read the full paper on GitHub](https://github.com/metanthropics/research-papers/blob/main/Revisiting_AlexNet__Achieving_High_Accuracy_on_CIFAR_10_with_Modern_Optimization_Techniques.pdf)
* **💻 Code Repository:** [View the source code on GitHub](https://github.com/metanthropics/revisiting-alexnet)
* **📓 Kaggle Notebook:** The full training process can be accessed at this [Kaggle link](https://www.kaggle.com/code/ekjotsinghmakhija/research-paper-1/notebook).
* **🤖 Hugging Face Model:** The final trained model is hosted on the Hugging Face Hub, available at this [Hugging Face link](https://huggingface.co/metanthropiclabs/alexnet-cifar10-optimized).

### References
1. **Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012).** *ImageNet Classification with Deep Convolutional Neural Networks.* Advances in neural information processing systems, 25. [cite: 179]
2. **Deng, J., Dong, W., Socher, R., Li, L. J., Li, K., & Fei-Fei, L. (2009).** *ImageNet: A large-scale hierarchical image database.* 2009 IEEE Conference on Computer Vision and Pattern Recognition. [cite: 175]
3. **Krizhevsky, A. (2009).** *Learning multiple layers of features from tiny images.* Master's thesis, University of Toronto. [cite: 177]
4. **Hinton, G. E., Srivastava, N., Krizhevsky, A., Sutskever, I., & Salakhutdinov, R. R. (2012).** *Improving neural networks by preventing co-adaptation of feature detectors.* arXiv preprint arXiv:1207.0580. [cite: 176]
5. **Nair, V., & Hinton, G. E. (2010).** *Rectified linear units improve restricted boltzmann machines.* 27th International Conference on Machine Learning (ICML-10). [cite: 183]
6. **LeCun, Y., Huang, F. J., & Bottou, L. (2004).** *Learning methods for generic object recognition with invariance to pose and lighting.* 2004 IEEE Computer Society Conference on Computer Vision and Pattern Recognition. [cite: 180, 181, 182]
